import { useState } from "react";
import {
  ArrowLeft,
  Activity,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Assets
import pricingBg from "@/assets/pricing-bg.png";
import logoWhite from "@/assets/logowhite.png";
import {
  CentralizedIcon,
  PlayerIcon,
} from "@/components/icons/CommonIcons";

export default function Pricing() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // =========================
  // Success State
  // =========================
  const [submitted, setSubmitted] = useState(false);

  const isPricing = searchParams.get("type") === "pricing";
  const isDemo = !isPricing;

  // =========================
  // Features
  // =========================
  const features = [
    {
      icon: Activity,
      title: "Real-time Device Monitoring",
      description:
        "Monitor camera feeds and IoT sensors in real-time with low-latency streaming.",
    },
    {
      icon: CentralizedIcon,
      title: "Centralized Playback",
      description:
        "Access recorded footage from distributed storage nodes in one unified timeline.",
    },
    {
      icon: ShieldCheck,
      title: "Smart Health Alerts",
      description:
        "Receive instant notifications for device offline status, motion detection, and errors.",
    },
    {
      icon: PlayerIcon,
      title: "Centralized Playback",
      description:
        "Access recorded footage from distributed storage nodes in one unified timeline.",
    },
    {
      icon: MonitorSmartphone,
      title: "Easy Onboarding",
      description:
        "Seamlessly discover and configure new cameras with our auto-provisioning tools.",
    },
  ];

  // =========================
  // Form Initial Values
  // =========================
  const initialValues = {
    firstName: "",
    lastName: "",
    workEmail: "",
    mobilePhoneNumber: "",
    jobTitle: "",
    companyName: "",
    message: "",
  };

  // =========================
  // Validation
  // =========================
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(
        /^[A-Za-z\s'-]+$/,
        "Only letters, spaces, hyphens and apostrophes are allowed"
      )
      .required("First name is required"),

    lastName: Yup.string()
      .matches(
        /^[A-Za-z\s'-]+$/,
        "Only letters, spaces, hyphens and apostrophes are allowed"
      )
      .required("Last name is required"),

    workEmail: Yup.string()
      .email("Please enter a valid email address")
      .required("Work email is required"),

    mobilePhoneNumber: Yup.string()
      .matches(
        /^[0-9+\-\s]{7,15}$/,
        "Mobile number must be 7-15 characters and contain only digits, +, - or spaces"
      )
      .required("Mobile phone number is required"),

    jobTitle: Yup.string()
      .trim()
      .required("Job title is required"),

    companyName: Yup.string()
      .trim()
      .required("Company name is required"),

    message: Yup.string()
      .max(2000, "Message cannot exceed 2000 characters")
      .required("Message is required"),
  });

  // =========================
  // API Submit
  // =========================
  const handleSubmit = async (
    values,
    { setSubmitting, setStatus, resetForm }
  ) => {
    try {
      setStatus(null);

      const response = await fetch(
        "http://192.168.11.154:9099/api/v1/demo-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();

      // =========================
      // SUCCESS
      // =========================
      if (response.ok && data.success === true) {
        resetForm();

        toast({
          title: "Request Submitted!",
          description:
            data.message ||
            "Your demo request has been received successfully.",
        });

        // Show success screen on same page
        setSubmitted(true);
      } else {
        // =========================
        // API ERROR
        // =========================
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong.",
          variant: "destructive",
        });

        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error("Demo request error:", error);

      toast({
        title: "Request Failed",
        description:
          "Unable to submit request. Please try again.",
        variant: "destructive",
      });

      setStatus({
        type: "error",
        message:
          "Unable to submit request. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // =========================
  // SEO Schema
  // =========================
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isDemo
      ? "Book a Demo - CamPulse AI VMS"
      : "CamPulse AI VMS Enterprise Licensing",

    description: isDemo
      ? "Schedule a personalized live demo of CamPulse AI VMS intelligent video management platform."
      : "Scalable enterprise AI video management and surveillance licensing packages with custom quote pricing.",

    provider: {
      "@type": "Organization",
      name: "CamPulse",
      url: "https://campulse.app",
    },

    serviceType: "Security Software",
  };

  return (
    <div className="min-h-screen flex bg-white font-roboto overflow-hidden">
      {/* =========================
          SEO
          ========================= */}
      <SEO
        title={
          isDemo
            ? "Book a Demo | Enterprise AI Video Management System | CamPulse"
            : "Enterprise VMS Security Pricing & Quote Request | CamPulse"
        }
        description={
          isDemo
            ? "Schedule a personalized live demo of CamPulse AI VMS and experience intelligent surveillance tailored to your organization."
            : "Request a custom quote for CamPulse AI VMS enterprise licensing. Discover scalable pricing packages tailored to your security and monitoring requirements."
        }
        keywords={
          isDemo
            ? "Book a demo, VMS demo, CamPulse live demo, video management demo"
            : "VMS pricing, security software quote, custom security system cost, CamPulse pricing"
        }
        path="/pricing"
        schema={pricingSchema}
      />

      {/* =====================================================
          LEFT SIDE
          ===================================================== */}
      <div className="hidden lg:flex w-full md:w-[45%] xl:max-w-[621px] relative h-screen">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(158.17deg,_#123391_12.13%,_#010C2B_96.95%)]">
          <div
            className="absolute top-[40%] left-[-20%] w-[140%] h-[120%] bg-cover bg-center transform rotate-[-12deg] scale-125 mix-blend-overlay opacity-60"
            style={{
              backgroundImage: `url(${pricingBg})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#04123b]/80 via-[#0B2A78]/40 to-transparent pointer-events-none" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col w-full p-8 lg:p-8 xl:w-[620px] h-full justify-between">
          {/* Logo */}
          <div className="mb-6">
            <Link to="/">
              <img
                src={logoWhite}
                alt="Campulse"
                className="h-[36px] md:h-[42px] object-contain"
              />
            </Link>
          </div>

          {/* What's New Card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 w-[390px] xl:w-[380px] shadow-xl">
              <h3 className="text-md font-roboto font-semibold text-slate-800 mb-5">
                What's New?
              </h3>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const isLast =
                    index === features.length - 1;

                  return (
                    <div
                      key={index}
                      className="flex gap-4 items-start mb-6"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-blue-100 flex items-center justify-center mt-0.5">
                        <feature.icon
                          className="w-4 h-4 text-blue-600"
                          strokeWidth={2.5}
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="font-roboto font-normal text-base leading-[150%] tracking-normal">
                          {feature.title}
                        </h4>

                        <p
                          className={`font-roboto font-normal text-slate-600 leading-[150%] tracking-normal text-[13px] ${isLast ? "mb-0" : "mb-2"
                            }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 text-white gap-2">
            <span className="font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]">
              © {new Date().getFullYear()} Transline Security Systems. All
              rights reserved.
            </span>

            <div className="flex gap-2 font-medium">
              <a
                href="#"
                className="hover:text-white transition-colors font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SIDE
          ===================================================== */}
      <div className="w-full flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-[7%] bg-white relative h-screen overflow-y-auto">
        {/* Back Button */}
        {!submitted && (
          <Link
            to="/"
            className="absolute top-4 left-6 md:top-8 md:left-8 p-2.5 rounded-full bg-[#F5F5F5] hover:bg-slate-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
        )}

        {/* =====================================================
            SUCCESS SCREEN
            ===================================================== */}
        {submitted ? (
          <div className="relative w-full max-w-[620px] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Blue */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-3xl animate-float" />

              {/* Green */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full bg-emerald-400/10 blur-3xl animate-float"
                style={{
                  animationDelay: "1s",
                }}
              />

              {/* Yellow */}
              <div
                className="absolute w-[220px] h-[220px] rounded-full bg-yellow-400/10 blur-3xl animate-float"
                style={{
                  animationDelay: "0.5s",
                }}
              />
            </div>

            {/* Pulse Rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="absolute w-36 h-36 rounded-full border border-blue-500/20 animate-ring-pulse"
                style={{
                  animationDelay: "0s",
                }}
              />

              <div
                className="absolute w-36 h-36 rounded-full border border-blue-500/20 animate-ring-pulse"
                style={{
                  animationDelay: "0.8s",
                }}
              />

              <div
                className="absolute w-36 h-36 rounded-full border border-emerald-500/20 animate-ring-pulse"
                style={{
                  animationDelay: "1.6s",
                }}
              />
            </div>

            {/* Success Content */}
            <div className="relative z-10 text-center px-4">
              {/* Icon + Particles */}
              <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
                {/* Particles */}
                {[
                  {
                    x: "-52px",
                    y: "-42px",
                    color: "bg-blue-600",
                    delay: "0.2s",
                  },
                  {
                    x: "52px",
                    y: "-35px",
                    color: "bg-emerald-500",
                    delay: "0.35s",
                  },
                  {
                    x: "40px",
                    y: "48px",
                    color: "bg-yellow-500",
                    delay: "0.5s",
                  },
                  {
                    x: "-48px",
                    y: "30px",
                    color: "bg-blue-500",
                    delay: "0.65s",
                  },
                  {
                    x: "0px",
                    y: "-58px",
                    color: "bg-emerald-500",
                    delay: "0.8s",
                  },
                ].map((particle, index) => (
                  <span
                    key={index}
                    className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full ${particle.color} opacity-80 animate-particle`}
                    style={{
                      ["--particle-x" as string]: particle.x,
                      ["--particle-y" as string]: particle.y,
                      animationDelay: particle.delay,
                    }}
                  />
                ))}

                {/* Outer Success Circle */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 shadow-[0_10px_40px_rgba(16,185,129,0.20)] animate-scale-pop">
                  {/* Inner Circle */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <svg
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeDasharray="32"
                        strokeDashoffset="32"
                        className="animate-draw-check"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2
                className="text-[30px] md:text-[34px] font-roboto font-semibold text-slate-900 tracking-tight opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.35s",
                }}
              >
                Thank You!
              </h2>

              {/* Description */}
              <p
                className="mt-4 max-w-[500px] mx-auto text-[14px] md:text-[15px] leading-[1.7] font-roboto text-slate-500 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.55s",
                }}
              >
                Your demo request has been successfully submitted. Our team
                will review your request and reach out shortly to schedule
                your personalized walkthrough.
              </p>

              {/* Success Badge */}
              <div
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2 text-[13px] font-roboto font-medium text-emerald-700 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.65s",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Request received successfully
              </div>

              {/* Buttons */}
              <div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.8s",
                }}
              >
                {/* Home */}
                <Link
                  to="/"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[linear-gradient(105.27deg,_#2563EB_-13.4%,_#153885_82.59%)] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Back to Home
                </Link>

                {/* Again */}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Book another demo
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =====================================================
             FORM
             ===================================================== */
          <div className="w-full max-w-[700px] mt-4">
            {/* Header */}
            <div className="mb-7">
              <h2 className="font-roboto font-semibold text-[24px] leading-[120%] tracking-[-0.02em] mb-2">
                {isDemo ? "Book a Demo" : "Request Pricing"}
              </h2>

              <p className="text-[13px] font-roboto text-gray-500 font-medium leading-[1.6]">
                {isDemo
                  ? "Schedule a personalized 1-on-1 live walkthrough of CamPulse AI VMS tailored to your operations."
                  : "Tell us about your deployment needs and our team will share a tailored enterprise quotation."}
              </p>
            </div>

            {/* Formik */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status }) => (
                <Form className="space-y-[14px]">
                  {/* First Name + Last Name */}
                  <div className="flex flex-col sm:flex-row gap-[14px]">
                    {/* First Name */}
                    <div className="flex-1 space-y-1.5">
                      <label className="text-sm font-medium text-slate-900">
                        First Name{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <Field name="firstName">
                        {({ field }) => (
                          <Input
                            {...field}
                            placeholder="eg. Ayush"
                            className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                          />
                        )}
                      </Field>

                      <ErrorMessage
                        name="firstName"
                        component="p"
                        className="text-xs text-red-500"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex-1 space-y-1.5">
                      <label className="text-sm font-medium text-slate-900">
                        Last Name{" "}
                        <span className="text-red-500">*</span>
                      </label>

                      <Field name="lastName">
                        {({ field }) => (
                          <Input
                            {...field}
                            placeholder="Gupta"
                            className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                          />
                        )}
                      </Field>

                      <ErrorMessage
                        name="lastName"
                        component="p"
                        className="text-xs text-red-500"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">
                      Work Email{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Field name="workEmail">
                      {({ field }) => (
                        <Input
                          {...field}
                          type="email"
                          placeholder="ayushgupta@gmail.com"
                          className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="workEmail"
                      component="p"
                      className="text-xs text-red-500"
                    />
                  </div>

                  {/* Mobile Phone */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">
                      Mobile phone number{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Field name="mobilePhoneNumber">
                      {({ field }) => (
                        <Input
                          {...field}
                          type="tel"
                          placeholder="736392747"
                          className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="mobilePhoneNumber"
                      component="p"
                      className="text-xs text-red-500"
                    />
                  </div>

                  {/* Job Title */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">
                      Job title{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Field name="jobTitle">
                      {({ field }) => (
                        <Input
                          {...field}
                          placeholder="Senior Product Manager"
                          className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="jobTitle"
                      component="p"
                      className="text-xs text-red-500"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">
                      Company name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Field name="companyName">
                      {({ field }) => (
                        <Input
                          {...field}
                          placeholder="Transline Security Systems"
                          className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5"
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="companyName"
                      component="p"
                      className="text-xs text-red-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-900">
                      Message{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Field name="message">
                      {({ field }) => (
                        <Textarea
                          {...field}
                          maxLength={2000}
                          placeholder="Tell us what you are looking for"
                          className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm min-h-[30px] resize-none px-3.5 py-3"
                        />
                      )}
                    </Field>

                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-xs text-red-500"
                    />
                  </div>

                  {/* API Status */}
                  {status?.message && (
                    <div
                      className={`text-sm text-center ${status.type === "success"
                        ? "text-green-600"
                        : "text-red-500"
                        }`}
                    >
                      {status.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex w-full justify-center">
                    <div className="pt-2 flex w-full mt-2 justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[linear-gradient(105.27deg,_#2563EB_-13.4%,_#153885_82.59%)] hover:opacity-90 text-white rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)] px-10 h-[46px] text-[14px] font-medium transition-all flex mx-auto md:mx-0 w-[60%] md:w-auto leading-[24px] tracking-[0em] text-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : isDemo
                            ? "Book a Demo"
                            : "Submit Request"}
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}