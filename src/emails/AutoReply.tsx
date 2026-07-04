import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface AutoReplyProps {
    name: string;
}

export default function AutoReply({
    name,
}: AutoReplyProps) {
    return (
        <Html>
            <Head />

            <Preview>
                Thank you for contacting The Listening Room
            </Preview>

            <Body
                style={{
                    backgroundColor: "#F9F8F6",
                    margin: 0,
                    padding: "40px 20px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <Container
                    style={{
                        maxWidth: "620px",
                        margin: "0 auto",
                        background: "#ffffff",
                        border: "1px solid #E8E6DF",
                        borderRadius: "18px",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <Section
                        style={{
                            backgroundColor: "#2D4739",
                            textAlign: "center",
                            padding: "36px",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "30px",
                                margin: 0,
                            }}
                        >
                            <Img
                                src="https://aorta-morphing-trimmer.ngrok-free.dev/logo/primary-logo.png"
                                width="230"
                                alt="The Listening Room"
                                style={{
                                    margin: "0 auto",
                                }}
                            />
                        </Text>

                        <Heading
                            style={{
                                color: "#ffffff",
                                fontSize: "30px",
                                margin: "12px 0 4px",
                                fontWeight: "500",
                            }}
                        >
                            The Listening Room
                        </Heading>

                        <Text
                            style={{
                                color: "#DCE5DD",
                                margin: 0,
                                fontSize: "15px",
                            }}
                        >
                            Counselling & Psychotherapy
                        </Text>
                    </Section>

                    {/* Body */}
                    <Section
                        style={{
                            padding: "40px",
                        }}
                    >
                        <Heading
                            style={{
                                color: "#2D4739",
                                fontSize: "28px",
                                fontWeight: "500",
                                marginTop: 0,
                            }}
                        >
                            Thank You for Reaching Out
                        </Heading>

                        <Text
                            style={{
                                color: "#555",
                                lineHeight: "28px",
                                fontSize: "16px",
                            }}
                        >
                            Hi <strong>{name}</strong>,
                        </Text>

                        <Text
                            style={{
                                color: "#555",
                                lineHeight: "28px",
                                fontSize: "16px",
                            }}
                        >
                            Thank you for contacting <strong>The Listening Room</strong>.
                        </Text>

                        <Text
                            style={{
                                color: "#555",
                                lineHeight: "28px",
                                fontSize: "16px",
                            }}
                        >
                            Your message has been received successfully.
                            I appreciate you taking the time to reach out,
                            and I understand that taking the first step
                            toward support can sometimes feel difficult.
                        </Text>

                        <Text
                            style={{
                                color: "#555",
                                lineHeight: "28px",
                                fontSize: "16px",
                            }}
                        >
                            I&apos;ll personally review your enquiry and aim to
                            respond within <strong>1–2 business days.</strong>
                        </Text>

                        <Section
                            style={{
                                backgroundColor: "#F5F4F1",
                                borderRadius: "12px",
                                padding: "22px",
                                marginTop: "28px",
                                marginBottom: "28px",
                            }}
                        >
                            <Heading
                                as="h3"
                                style={{
                                    color: "#2D4739",
                                    fontSize: "18px",
                                    marginTop: 0,
                                }}
                            >
                                What happens next?
                            </Heading>

                            <Text
                                style={{
                                    color: "#555",
                                    lineHeight: "26px",
                                    marginBottom: 0,
                                }}
                            >
                                • I&apos;ll review your message carefully.
                                <br />
                                • I&apos;ll contact you using the email or phone number
                                you provided.
                                <br />
                                • Together we&apos;ll determine the most appropriate
                                next step for your needs.
                            </Text>
                        </Section>

                        <Button
                            href={process.env.NEXT_PUBLIC_MEETING_URL}
                            style={{
                                backgroundColor: "#2D4739",
                                color: "#ffffff",
                                padding: "14px 26px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                display: "inline-block",
                                fontWeight: "600",
                            }}
                        >
                            Book a Free 15-Minute Consultation
                        </Button>

                        <Hr
  style={{
    margin: "40px 0",
    borderColor: "#E8E6DF",
  }}
/>

<Section
  style={{
    textAlign: "center",
    paddingBottom: "30px",
  }}
>

  <Img
    src="https://aorta-morphing-trimmer.ngrok-free.dev/logo/primary-logo.png"
    width="210"
    alt="The Listening Room"
    style={{
      margin: "0 auto 24px",
    }}
  />

  <Text
    style={{
      color: "#555",
      fontSize: "15px",
      lineHeight: "28px",
      marginBottom: "10px",
    }}
  >
    Counselling & Psychotherapy
  </Text>

  <Text
    style={{
      color: "#777",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    📧 support@thelisteningroom.ca
  </Text>

  <Text
    style={{
      color: "#777",
      fontSize: "14px",
      marginBottom: "6px",
    }}
  >
    📞 548-255-9555
  </Text>

  <Text
    style={{
      color: "#777",
      fontSize: "14px",
      marginBottom: "24px",
    }}
  >
    🌐 https://thelisteningroom.ca
  </Text>

  <Text
    style={{
      color: "#9A9A9A",
      fontSize: "12px",
      lineHeight: "20px",
    }}
  >
    © {new Date().getFullYear()} The Listening Room.
    <br />
    All rights reserved.
  </Text>

</Section>

                        <Text
                            style={{
                                color: "#666",
                                lineHeight: "26px",
                            }}
                        >
                            <strong>Please Note</strong>
                        </Text>

                        <Text
                            style={{
                                color: "#666",
                                lineHeight: "26px",
                                fontSize: "15px",
                            }}
                        >
                            This mailbox is monitored during business
                            hours and is not intended for emergencies.
                        </Text>

                        <Text
                            style={{
                                color: "#666",
                                lineHeight: "26px",
                                fontSize: "15px",
                            }}
                        >
                            If you or someone else is in immediate danger
                            or experiencing a mental health crisis,
                            please contact your local emergency services
                            or your nearest crisis support service.
                        </Text>

                        <Hr
                            style={{
                                margin: "36px 0",
                                borderColor: "#E8E6DF",
                            }}
                        />

                        <Text
                            style={{
                                color: "#555",
                                lineHeight: "28px",
                                fontSize: "16px",
                            }}
                        >
                            Warm regards,
                        </Text>

                        <Text
                            style={{
                                color: "#2D4739",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "6px",
                            }}
                        >
                            The Listening Room
                        </Text>

                        <Text
                            style={{
                                color: "#777",
                                fontSize: "14px",
                                marginTop: 0,
                            }}
                        >
                            Counselling & Psychotherapy
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section
                        style={{
                            backgroundColor: "#F5F4F1",
                            textAlign: "center",
                            padding: "24px",
                        }}
                    >
                        <Text
                            style={{
                                color: "#888",
                                fontSize: "13px",
                                margin: 0,
                            }}
                        >
                            © {new Date().getFullYear()} The Listening Room
                        </Text>

                        <Text
                            style={{
                                color: "#888",
                                fontSize: "13px",
                                marginTop: "8px",
                            }}
                        >
                            This is an automated confirmation email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}