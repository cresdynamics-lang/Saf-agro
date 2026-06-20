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

type ContactEnquiryEmailProps = {
  fullName: string;
  company?: string;
  country: string;
  email: string;
  phone: string;
  product?: string;
  grade?: string;
  quantity?: string;
  packing?: string;
  delivery?: string;
  destination?: string;
  notes?: string;
};

export default function ContactEnquiryEmail({
  fullName,
  company,
  country,
  email,
  phone,
  product,
  grade,
  quantity,
  packing,
  delivery,
  destination,
  notes,
}: ContactEnquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Enquiry from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Enquiry</Heading>
          <Text style={text}>
            A new enquiry was submitted through the SAF Agro general contact form.
          </Text>

          <Section style={section}>
            <Heading as="h3" style={h3}>Contact Details</Heading>
            <Text style={item}><strong>Name:</strong> {fullName}</Text>
            {company && <Text style={item}><strong>Company:</strong> {company}</Text>}
            <Text style={item}><strong>Country:</strong> {country}</Text>
            <Text style={item}><strong>Email:</strong> {email}</Text>
            <Text style={item}><strong>Phone/WhatsApp:</strong> {phone}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h3" style={h3}>Enquiry Details</Heading>
            {product && <Text style={item}><strong>Product Required:</strong> {product}</Text>}
            {grade && <Text style={item}><strong>Grade:</strong> {grade}</Text>}
            {quantity && <Text style={item}><strong>Quantity:</strong> {quantity} MT</Text>}
            {packing && <Text style={item}><strong>Packing:</strong> {packing}</Text>}
            {delivery && <Text style={item}><strong>Delivery Preference:</strong> {delivery}</Text>}
            {destination && <Text style={item}><strong>Destination:</strong> {destination}</Text>}
            
            {notes && (
              <>
                <Text style={item}><strong>Additional Notes / Message:</strong></Text>
                <Text style={{ ...item, padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "4px" }}>
                  {notes}
                </Text>
              </>
            )}
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
