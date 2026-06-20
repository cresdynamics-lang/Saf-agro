import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type OrderEnquiryEmailProps = {
  product: string;
  grade: string;
  fullName: string;
  company?: string;
  country: string;
  email: string;
  phone: string;
  quantity: string;
  packing: string;
  delivery: string;
  destination: string;
  notes?: string;
};

export default function OrderEnquiryEmail({
  product,
  grade,
  fullName,
  company,
  country,
  email,
  phone,
  quantity,
  packing,
  delivery,
  destination,
  notes,
}: OrderEnquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Order Enquiry for {product} ({grade})</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Order Enquiry</Heading>
          <Text style={text}>
            A new highly-qualified product order enquiry was submitted on SAF Agro.
          </Text>

          <Section style={section}>
            <Heading as="h3" style={h3}>Product Details</Heading>
            <Text style={item}><strong>Product:</strong> {product}</Text>
            <Text style={item}><strong>Grade:</strong> {grade}</Text>
            <Text style={item}><strong>Quantity:</strong> {quantity} MT</Text>
            <Text style={item}><strong>Packing:</strong> {packing}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h3" style={h3}>Logistics Details</Heading>
            <Text style={item}><strong>Delivery:</strong> {delivery}</Text>
            <Text style={item}><strong>Destination:</strong> {destination}</Text>
            {notes && <Text style={item}><strong>Additional Notes:</strong> {notes}</Text>}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h3" style={h3}>Contact Details</Heading>
            <Text style={item}><strong>Name:</strong> {fullName}</Text>
            {company && <Text style={item}><strong>Company:</strong> {company}</Text>}
            <Text style={item}><strong>Country:</strong> {country}</Text>
            <Text style={item}><strong>Email:</strong> {email}</Text>
            <Text style={item}><strong>Phone/WhatsApp:</strong> {phone}</Text>
          </Section>

          <Text style={footer}>
            SAF Agro Notification System • Generated Automatically
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9f6",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const h1 = {
  color: "#326949",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "17px 0 0",
  margin: "0",
};

const h3 = {
  color: "#111",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "24px",
};

const item = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "4px 0",
};

const section = {
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #eee",
  marginBottom: "16px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};
