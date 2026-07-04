import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Img } from "@react-email/components";

interface Props {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export default function ContactNotification({
    name,
    email,
    phone,
    message,
}: Props) {
    return (
        <Html>
            <Head />

            <Preview>
                New Contact Form Submission
            </Preview>

            <Body
                style={{
                    backgroundColor: "#F9F8F6",
                    fontFamily:
                        "Arial, Helvetica, sans-serif",
                    padding: "40px 0",
                }}
            >
                <Container
                    style={{
                        maxWidth: "620px",
                        margin: "0 auto",
                        background: "#ffffff",
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid #E8E6DF",
                    }}
                >
                    {/* Header */}

                    <Section
                        style={{
                            background: "#2D4739",
                            padding: "36px",
                            textAlign: "center",
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
                                marginTop: "10px",
                                marginBottom: 0,
                                fontWeight: 500,
                                fontSize: "30px",
                            }}
                        >
                            The Listening Room
                        </Heading>

                        <Text
                            style={{
                                color: "#D8E0DA",
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
                            }}
                        >
                            New Contact Form Submission
                        </Heading>

                        <Text
                            style={{
                                color: "#666",
                                lineHeight: 1.7,
                            }}
                        >
                            Someone has submitted a new enquiry
                            through your website.
                        </Text>

                        <Hr />

                        <Heading
                            as="h2"
                            style={{
                                color: "#2D4739",
                                fontSize: "20px",
                            }}
                        >
                            Client Details
                        </Heading>

                        <Text>
                            <strong>Name:</strong> {name}
                        </Text>

                        <Text>
                            <strong>Email:</strong> {email}
                        </Text>

                        <Text>
                            <strong>Phone:</strong>{" "}
                            {phone || "-"}
                        </Text>

                        <Hr />

                        <Heading
                            as="h2"
                            style={{
                                color: "#2D4739",
                                fontSize: "20px",
                            }}
                        >
                            Message
                        </Heading>

                        <Section
                            style={{
                                background: "#F6F6F4",
                                borderRadius: "10px",
                                padding: "20px",
                            }}
                        >
                            <Text
                                style={{
                                    whiteSpace: "pre-wrap",
                                    color: "#444",
                                    lineHeight: 1.8,
                                }}
                            >
                                {message}
                            </Text>
                        </Section>

                        <Hr
                            style={{
                                margin: "40px 0",
                                borderColor: "#E8E6DF",
                            }}
                        />

                        <Section
                            style={{
                                textAlign: "center",
                                paddingBottom: "20px",
                            }}
                        >

                            <Img
                                src="https://aorta-morphing-trimmer.ngrok-free.dev/logo/primary-logo.png"
                                width="220"
                                alt="The Listening Room"
                                style={{
                                    margin: "0 auto 20px",
                                }}
                            />

                            <Text
                                style={{
                                    color: "#555",
                                    fontSize: "15px",
                                    marginBottom: "8px",
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
                                📧 {process.env.NEXT_PUBLIC_EMAIL_ID}
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
                                    marginBottom: "25px",
                                }}
                            >
                                🌐 https://thelisteningroom.ca
                            </Text>

                            <Text
                                style={{
                                    color: "#999",
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                }}
                            >
                                © {new Date().getFullYear()} The Listening Room
                                <br />
                                All rights reserved.
                            </Text>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}