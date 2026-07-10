// components/website/investigator/ImageTextSection.tsx
import React from "react";

interface ImageTextSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  bgClass?: string;
  heading?: string;
  paragraphs?: string[];
  showButtons?: boolean;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  title = "How Our Site Support Nurses Ensure Regulatory Compliance",
  subtitle = "Our site support nurses are fully trained to maintain the highest regulatory standards. They ensure:",
  description = "",
  items = [],
  buttonText = "",
  imageSrc = "/images/rt-img.png",
  imageAlt = "Doctor with patient",
  bgClass = "",
  heading = "",
  paragraphs = [],
  showButtons = false,
}) => {
  const defaultItems = [
    {
      icon: "/images/user.png",
      title: "Single Point of Contact",
      description:
        "Your dedicated Study Manager handles all operational queries and coordination",
    },
    {
      icon: "/images/time.png",
      title: "Real-Time Updates",
      description:
        "Immediate notification of visit completions, adverse events, and protocol deviations",
    },
    {
      icon: "/images/file.png",
      title: "Comprehensive Reporting",
      description:
        "Regular progress reports and quality metrics for your trial oversight",
    },
  ];

  const gridItems = items.length > 0 ? items : defaultItems;

  return (
    <section className={`hvs-section page-main-custom page-section hvs-main-service ${bgClass}`}>
      <div className="container">
        <div className="inner-hvs-sec hvs-in">

          <div className="page-section__heading">
            {heading && <h2>{heading}</h2>}
            {title && <h2>{title}</h2>}
            {subtitle && <p className="p-tag">{subtitle}</p>}
            {description && <p>{description}</p>}

            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {gridItems.length > 0 && (
              <div className="info-grid info-grid--three">
                {gridItems.map((item: any, index: number) => (
                  <article className="info-card" key={index}>
                    <div className="bottom-grid-area">
                      <div className="info-card__icon info-card__icon--blue">
                        <img src={item.icon} alt="" />
                      </div>

                      <div className="h3-bottom">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {showButtons && (
              <div className="hero-buttons">
                <a href="#" className="btn primary">
                  Get Started
                </a>
                <a href="#" className="btn secondary">
                  Learn More
                </a>
              </div>
            )}
          </div>

          <div className="hvs-visual img">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;