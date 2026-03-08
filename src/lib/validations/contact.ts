import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  serviceInterest: z.enum(
    ["wardrobe-consulting", "personal-styling", "event-styling", "other"],
    { message: "Please select a service" }
  ),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional().or(z.literal("")),
  preferredContact: z.enum(["email", "phone", "either"], {
    message: "Please select a preferred contact method",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const serviceOptions = [
  { value: "wardrobe-consulting", label: "Wardrobe Consulting" },
  { value: "personal-styling", label: "Personal Styling" },
  { value: "event-styling", label: "Event Styling" },
  { value: "other", label: "Other" },
] as const;

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
] as const;
