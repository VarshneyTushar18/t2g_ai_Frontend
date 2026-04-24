import { useParams } from "react-router-dom";
import { getSolutionData } from "../data/solutions";

// ✅ import all sections
import HeroSection from "../sections/solutions/HeroSection";
import ProblemSection from "../sections/solutions/ProblemSection";
import FeaturesSection from "../sections/solutions/FeaturesSection";
import ProcessSection from "../sections/solutions/ProcessSection";
import BenefitsSection from "../sections/solutions/BenefitsSection";
import IndustriesSection from "../sections/solutions/IndustriesSection";
import FAQSection from "../sections/solutions/FAQSection";
import { Link } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";

export default function SolutionDetail() {
    const { slug } = useParams();

    const solution = getSolutionData(slug || "");

    if (!solution) {
        // return <div className="p-10 text-red-500">Solution not found</div>;
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 1rem",
                    position: "relative",
                    background: "#ffffff",
                }}
                data-ocid="not-found.section"
            >
                {/* Background accents */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "33%",
                            left: "25%",
                            width: "400px",
                            height: "400px",
                            borderRadius: "50%",
                            opacity: 0.06,
                            filter: "blur(60px)",
                            background: "radial-gradient(circle, #4f8ef7 0%, transparent 70%)",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "33%",
                            right: "25%",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            opacity: 0.06,
                            filter: "blur(60px)",
                            background: "radial-gradient(circle, #7c5cbf 0%, transparent 70%)",
                        }}
                    />
                </div>

                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        textAlign: "center",
                        maxWidth: "512px",
                    }}
                >
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 32px",
                            background: "rgba(79,142,247,0.08)",
                            border: "1px solid rgba(79,142,247,0.2)",
                        }}
                    >
                        <Search size={36} style={{ color: "#4f8ef7" }} />
                    </div>

                    <h1
                        style={{
                            fontSize: "2.25rem",
                            fontWeight: 700,
                            color: "#1a1a2e",
                            marginBottom: "16px",
                        }}
                    >
                        Solution Not Found
                    </h1>
                    <p
                        style={{ color: "#6b7280", fontSize: "1.1rem", marginBottom: "8px" }}
                    >
                        We couldn't find a solution page for:
                    </p>
                    <code
                        style={{
                            display: "inline-block",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "0.875rem",
                            fontFamily: "monospace",
                            marginBottom: "32px",
                            background: "rgba(79,142,247,0.08)",
                            border: "1px solid rgba(79,142,247,0.2)",
                            color: "#4f8ef7",
                        }}
                    >
                        /solutions/{slug}
                    </code>
                    <p style={{ color: "#6b7280", marginBottom: "40px" }}>
                        This solution may not exist yet or the URL may be incorrect. Explore
                        our available solutions below.
                    </p>

                    <Link
                        to="/"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "14px 28px",
                            borderRadius: "12px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            background: "linear-gradient(135deg, #4f8ef7, #7c5cbf)",
                        }}
                        data-ocid="not-found.cta"
                    >
                        <ArrowLeft size={16} />
                        Back to Solutions
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">

            {/* ✅ THIS is why you were only seeing title before */}
            <HeroSection data={solution} />

            {/* ❌ These are missing in your current setup */}
            {/* Uncomment when you add these files */}

            <ProblemSection data={solution} />
            <FeaturesSection data={solution} />
            <ProcessSection data={solution} />
            <BenefitsSection data={solution} />
            <IndustriesSection data={solution} />
            <FAQSection data={solution} />

        </div>
    );
}