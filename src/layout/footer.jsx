import logo from "@/assets/footer/logo.svg";

const hrefList = (data = []) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p className="text-14 leading-16 text-[#337DB9] font-['Helvetica'] font-medium mb-16">
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default function Footer() {
  return (
    <div className="w-full h-496 bg-white z-10">
      <div className="w-960 mx-auto mt-130 flex justify-between">
        <div className="w-313 h-216">
          <div className="w-full h-48">
            <div
              className="w-full h-48 bg-[-37px_0px]"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div className="font-['Helvetica'] font-medium w-full text-[#000] text-16 leading-24 mt-42">
            Centaurus is a digital marketing consultancy that specializes in
            serving business in all industries. We serve our clients with the
            spirits of “Professional, Customer First & Trend Following.
          </div>
        </div>
        <div className="w-603 h-210 flex justify-between">
          <div className="w-160">
            <p className="text-14 leading-17 font-['Helvetica'] font-bold mb-25">
              Home
            </p>
            {hrefList([
              {
                href: "#/tech-data",
                label: "Tech&Data",
              },
              {
                href: "#/insight",
                label: "Insight",
              },
              {
                href: "#/news",
                label: "News",
              },
              {
                href: "#/about",
                label: "About",
              },
              {
                href: "#/contact",
                label: "Contact Us",
              },
            ])}
          </div>
          <div className="w-270">
            <p className="text-14 leading-17 font-['Helvetica'] font-bold mb-25">
              Digital Services
            </p>
            <div className="flex">
              <div className="mr-46">
                {hrefList([
                  {
                    href: "#/services/taboola",
                    label: "Programmatic",
                  },
                  {
                    href: "#/services/sem",
                    label: "SEM",
                  },
                  {
                    href: "#/services/seo",
                    label: "SEO",
                  },
                  {
                    href: "#/services/social",
                    label: "Social",
                  },
                  {
                    href: "#/services/content",
                    label: "Content",
                  },
                  {
                    href: "#/services/influencer",
                    label: "Influencer(KOL)",
                  },
                ])}
              </div>
              <div>
                {hrefList([
                  {
                    href: "#/services/display",
                    label: "Display",
                  },
                  {
                    href: "#/services/video",
                    label: "Video",
                  },
                  {
                    href: "#/services/china-ecommerce",
                    label: "China",
                  },
                  {
                    href: "#/services/southeast-asia-ecommerce",
                    label: "Sea",
                  },
                  {
                    href: "#/services/global-digital",
                    label: "Global",
                  },
                ])}
              </div>
            </div>
          </div>
          <div className="w-180">
            <p className="text-14 leading-17 font-['Helvetica'] font-bold mb-25">
              Ecommerce
            </p>
            {hrefList([
              {
                href: "#/services/china-ecommerce",
                label: "China Ecommerce",
              },
              {
                href: "#/services/southeast-asia-ecommerce",
                label: "Southeast Asia Ecommerce",
              },
            ])}
          </div>
        </div>
      </div>
      <div className="font-['Helvetica'] font-medium w-960 mx-auto mt-72 text-14 leading-17">
        ©2024 International Centaurus Company
      </div>
    </div>
  );
}
