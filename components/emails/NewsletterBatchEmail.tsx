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

type NewsletterBatchEmailProps = {
  subscribers: string[];
};

export default function NewsletterBatchEmail({
  subscribers,
}: NewsletterBatchEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`${subscribers.length} New Newsletter Subscribers`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Newsletter Subscribers</Heading>
          <Text style={text}>
            You have reached a new batch of <strong>{subscribers.length}</strong> newsletter subscribers on SAF Agro. Here is the list:
          </Text>

          <Section style={section}>
            {subscribers.map((email, i) => (
              <Text key={email} style={item}>
                {i + 1}. {email}
              </Text>
            ))}
          </Section>

          <Hr style={hr} />

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

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "24px",
};

const item = {
  color: "#111",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "8px 0",
  padding: "8px",
  backgroundColor: "#fafafa",
  borderRadius: "4px",
  border: "1px solid #eee",
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
