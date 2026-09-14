import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Opportunity } from "@/components/sections/Opportunity";
import { GlobalModel } from "@/components/sections/GlobalModel";
import { DubaiCenter } from "@/components/sections/DubaiCenter";
import { TechnicalProcessing } from "@/components/sections/TechnicalProcessing";
import { Verified } from "@/components/sections/Verified";
import { DevicePassport } from "@/components/sections/DevicePassport";
import { NoryxOs } from "@/components/sections/NoryxOs";
import { WhyNoryx } from "@/components/sections/WhyNoryx";
import { Architecture } from "@/components/sections/Architecture";
import { GlobalNetwork } from "@/components/sections/GlobalNetwork";
import { FutureVision } from "@/components/sections/FutureVision";
import { Contact } from "@/components/sections/Contact";
import { StageNote } from "@/components/ui/StageNote";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = await getDictionary(raw);

  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <StageNote text={dict.stage.note} />
      <Opportunity dict={dict.opportunity} />
      <GlobalModel dict={dict.globalModel} />
      <DubaiCenter dict={dict.dubai} />
      <TechnicalProcessing dict={dict.processing} />
      <Verified dict={dict.verified} />
      <DevicePassport dict={dict.passport} />
      <NoryxOs dict={dict.technology} />
      <WhyNoryx dict={dict.why} />
      <Architecture dict={dict.architecture} />
      <GlobalNetwork dict={dict.network} />
      <FutureVision dict={dict.future} />
      <Contact dict={dict.contact} locale={raw} />
    </>
  );
}
