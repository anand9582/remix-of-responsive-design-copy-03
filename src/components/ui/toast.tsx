import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckCircle2, X, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-4 right-4 z-[100] flex w-[calc(100%-2rem)] max-w-[420px] flex-col gap-3 outline-none sm:bottom-6 sm:right-6",
      className,
    )}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full overflow-hidden",
    "rounded-2xl border bg-white p-4",
    "shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
    "transition-all duration-300",
    "data-[swipe=cancel]:translate-x-0",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=move]:transition-none",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-80",
    "data-[state=closed]:slide-out-to-right-full",
    "data-[state=open]:slide-in-from-right-full",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-slate-200",
          "text-slate-900",
        ].join(" "),

        destructive: [
          "border-red-200",
          "text-slate-900",
        ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      {/* Left accent */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1",
          variant === "destructive"
            ? "bg-red-500"
            : "bg-emerald-500",
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          variant === "destructive"
            ? "bg-red-50 text-red-500"
            : "bg-emerald-50 text-emerald-600",
        )}
      >
        {variant === "destructive" ? (
          <AlertCircle className="h-5 w-5" />
        ) : (
          <CheckCircle2 className="h-5 w-5" />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pr-7">
        {props.children}
      </div>

      {/* Close button */}
      <ToastClose />

      {/* Progress line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[3px] w-full origin-left",
          variant === "destructive"
            ? "bg-red-400"
            : "bg-emerald-400",
        )}
      />
    </ToastPrimitives.Root>
  );
});

Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "mt-2 inline-flex h-8 shrink-0 items-center justify-center",
      "rounded-lg border border-slate-200 bg-slate-50",
      "px-3 text-xs font-medium text-slate-700",
      "transition-colors hover:bg-slate-100",
      "focus:outline-none focus:ring-2 focus:ring-slate-300",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));

ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-3 top-3 rounded-lg p-1.5",
      "text-slate-400 opacity-70",
      "transition-all hover:bg-slate-100 hover:text-slate-700",
      "focus:opacity-100 focus:outline-none",
      "focus:ring-2 focus:ring-slate-200",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));

ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "mb-1 text-sm font-semibold leading-5 text-slate-900",
      className,
    )}
    {...props}
  />
));

ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(
      "text-[13px] leading-5 text-slate-500",
      className,
    )}
    {...props}
  />
));

ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};