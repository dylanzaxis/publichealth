import { Col, Row, Divider, Tag } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { MakeList } from "../../../utils/list";
import RightSide from "../home/rightSide";


function Title(props) {
  const { hide_loadmore, title, title_blue, link_to } = props;

  let full_title = (
    <div>
      {title} <span className="header_blue">{title_blue}</span>
    </div>
  );

  return (
    <Row>
      <Col className="item_title" span={24}>
        <Divider orientationMargin={0} orientation="left">
          {full_title}
        </Divider>
      </Col>
      <Col span={24}>{props.children}</Col>
      {!hide_loadmore && (
        <Col span={24}>
          <a href={link_to}>
            <div className="load_more">Load More</div>
          </a>
        </Col>
      )}
    </Row>
  );
}
function StoryBody(props) {
  return (
    <Title hide_loadmore={true} {...props}>
      <Row gutter={36}>
        <MakeList {...props} />
      </Row>
    </Title>
  );
}

const scientific_studies = [
  {
    title: "The “original antigenic sin” and its relevance for SARS-CoV-2 (COVID-19) vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S2772613421000068#bib0002",
    categories: ["study"],
    date: "",
  },
  {
    title: "Reconciling estimates of global spread and infection fatality rates of COVID-19: An overview of systematic evaluations",
    image: "/assets/imgs/dummy.jpg",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/eci.13554",
    categories: ["study Ioannidis"],
  },
  {
    title: "Cribriform Plate Injury After Nasal Swab Testing for COVID-19",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/2784128",
    categories: ["study"],
  },
  {
    title: "Negative effect of the second dose of the BNT162b2 vaccine in a significant percentage of individuals with previous COVID infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/34749010/",
    categories: ["study"],
  },
  {
    title: "Comprehensive investigations revealed consistent pathophysiological alterations after vaccination with COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41421-021-00329-3",
    categories: ["study"],
  },
  {
    title: "Subramanian and Kumar’s study (see graph) showed us all we needed to know: there is NO association between levels of population vaccination and infection/cases burden; NONE",
    image: "/assets/imgs/dummy.jpg",
    link: "https://palexander.substack.com/p/subramanian-and-kumars-study-see?justPublished=true",
    categories: ["study"],
  },
  {
    title: "Viral infection and transmission in a large, well-traced outbreak caused by the SARS-CoV-2 Delta variant",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.07.07.21260122v2",
    categories: ["study"],
  },
  {
    title: "Epidemiology of Acute Myocarditis/Pericarditis in Hong Kong Adolescents Following Comirnaty Vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://academic.oup.com/cid/advance-article-abstract/doi/10.1093/cid/ciab989/6445179?redirectedFrom=fulltext",
    categories: ["study"],
  },
  {
    title: "SARS-CoV-2 vaccination and myocarditis or myopericarditis: population based cohort study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.bmj.com/content/375/bmj-2021-068665",
    categories: ["study"],
  },
  {
    title: "SARS-CoV-2 infects human adipose tissue and elicits an inflammatory response consistent with severe COVID-19 study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.10.24.465626v1",
    categories: ["study (underlying risk factor for COVID)"],
  },
  {
    title: "Epidemiology of myocarditis and pericarditis following mRNA vaccines in Ontario, Canada: by vaccine product, schedule and interval",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.12.02.21267156v1",
    categories: ["study (myocarditis)"],
  },
  {
    title: "Previous COVID-19 infection but not Long-COVID is associated with increased adverse events following BNT162b2/Pfizer vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.04.15.21252192v1",
    categories: ["study (vaccine safety)"],
  },
  {
    title: "Reduced Neutralization of SARS-CoV-2 Omicron Variant by Vaccine Sera and monoclonal antibodies",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.12.07.21267432v1",
    categories: ["study (vaccine failure/failed breakthrough infection/Delta/omicron)"],
  },
  {
    title: "The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both adaptive and innate immune responses",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1.full",
    categories: ["study (natural/innate immunity)"],
  },
  {
    title: "Appendicitis as a possible safety signal for the COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8565092/",
    categories: ["study (vaccine safety)"],
  },
  {
    title: "Safety and immunogenicity of seven COVID-19 vaccines as a third dose (booster) following two doses of ChAdOx1 nCov-19 or BNT162b2 in the UK (COV-BOOST): a blinded, multicentre, randomised, controlled, phase 2 trial",
    image: "/assets/imgs/dummy.jpg",
    link: "file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/PIIS0140673621027173.pdf",
    categories: ["study (vaccine safety)"],
  },
  {
    title: "SARS-CoV-2 infects human adipose tissue and elicits an inflammatory response consistent with severe COVID-19 study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.10.24.465626v1",
    categories: ["study (underlying risk factor for COVID)"],
  },
  {
    title: "Epidemiology of myocarditis and pericarditis following mRNA vaccines in Ontario, Canada: by vaccine product, schedule and interval",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.12.02.21267156v1",
    categories: ["study (myocarditis)"],
  },
  {
    title: "Previous COVID-19 infection but not Long-COVID is associated with increased adverse events following BNT162b2/Pfizer vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.04.15.21252192v1",
    categories: ["study (vaccine safety)"],
  },
  {
    title: "Protection and waning of natural and hybrid COVID-19 immunity",
    image: "/assets/imgs/dummy.jpg",
    link: "file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/2021.12.04.21267114v1.full%20(1).pdf",
    categories: ["study"],
  },
  {
    title: "Guillain-Barré Syndrome after COVID-19 Vaccination in the Vaccine Safety Datalink",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.12.03.21266419v1",
    categories: ["Study harms"],
  },
  {
    title: "Reduced Neutralization of SARS-CoV-2 Omicron Variant by Vaccine Sera and monoclonal antibodies",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.12.07.21267432v1",
    categories: ["Study (vaccine failure/failed breakthrough infection/Delta/omicron)"],
  },
  {
    title: "The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both adaptive and innate immune responses",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1.full",
    categories: ["Study (natural/innate immunity)"],
  },
  {
    title: "Appendicitis as a possible safety signal for the COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8565092/",
    categories: ["Study (vaccine safety)"],
  },
  {
    title: "Safety and immunogenicity of seven COVID-19 vaccines as a third dose (booster) following two doses of ChAdOx1 nCov-19 or BNT162b2 in the UK (COV-BOOST): a blinded, multicentre, randomised, controlled, phase 2 trial",
    image: "/assets/imgs/dummy.jpg",
    link: "file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/PIIS0140673621027173.pdf",
    categories: ["Study (vaccine safety)"],
  },
  {
    title: "Evaluation of COVID-19 vaccine breakthrough infections among immunocompromised patients fully vaccinated with BNT162b2",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.tandfonline.com/doi/full/10.1080/13696998.2021.2002063",
    categories: ["Study"],
  },
  {
    title: "Odds of Testing Positive for SARS-CoV-2 Following Receipt of 3 vs 2 Doses of the BNT162b2 mRNA Vaccine",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2786890?utm_campaign=articlePDF&amp;utm_medium=articlePDFlink&amp;utm_source=articlePDF&amp;utm_content=jamainternmed.2021.7382",
    categories: ["Study"],
  },
  {
    title: "The SARS-CoV-2 Spike protein disrupts human cardiac pericytes function through CD147-receptor-mediated signalling: a potential non-infective mechanism of COVID-19 microvascular disease",
    image: "/assets/imgs/dummy.jpg",
    link: "https://portlandpress.com/clinsci/article/doi/10.1042/CS20210735/230273/The-SARS-CoV-2-Spike-protein-disrupts-human",
    categories: ["Study"],
  },
  {
    title: "Transmission potential of vaccinated and unvaccinated persons infected with the SARS-CoV-2 Delta variant in a federal prison, July—August 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.11.12.21265796v1",
    categories: ["Study"],
  },
  {
    title: "Increased risk of infection with SARS-CoV-2 Beta, Gamma, and Delta variant 2 compared to Alpha variant in vaccinated individuals",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.11.24.21266735v1.full.pdf",
    categories: ["Study"],
  },
  {
    title: "A Possible Role for Anti-idiotype Antibodies in SARS-CoV-2 Infection and Vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMcibr2113694",
    categories: ["Study"],
  },
  {
    title: "Transmission potential of vaccinated and unvaccinated persons infected with the SARS-CoV-2 Delta variant in a federal prison, July-August 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.11.12.21265796v1",
    categories: ["Study"],
  },
  {
    title: "The tangled history of mRNA vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/d41586-021-02483-w",
    categories: ["Study"],
  },
  {
    title: "Abstract 10712: Mrna COVID Vaccines Dramatically Increase Endothelial Inflammatory Markers and ACS Risk as Measured by the PULS Cardiac Test: a Warning",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ahajournals.org/doi/abs/10.1161/circ.144.suppl_1.10712",
    categories: ["Study"],
  },
  {
    title: "Association of Prior SARS-CoV-2 Infection With Risk of Breakthrough Infection Following mRNA Vaccination in Qatar",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jama/fullarticle/2785918?guestAccessKey=c1f38ae9-9e7c-423b-a933-37c134185235&amp;utm_source=silverchair&amp;utm_campaign=jama_network&amp;utm_content=covid_weekly_highlights&amp;utm_medium=email",
    categories: ["Study"],
  },
  {
    title: "Persistence of SARS CoV-2 S1 Protein in CD16+ Monocytes in Post-Acute Sequelae of COVID-19 (PASC) Up to 15 Months Post-Infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.06.25.449905v1",
    categories: ["Study long COVID"],
  },
  {
    title: "Differences in monocyte subsets between severe COVID-19 and long COVID",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.news-medical.net/news/20210628/Differences-in-monocyte-subsets-between-severe-COVID-19-and-long-COVID.aspx",
    categories: ["Study long COVID"],
  },
  {
    title: "Covid-19: Researcher blows the whistle on data integrity issues in Pfizer’s vaccine trial",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.bmj.com/content/375/bmj.n2635",
    categories: ["Study"],
  },
  {
    title: "Worse Than the Disease? Reviewing Some Possible Unintended Consequences of the mRNA Vaccines Against COVID-19",
    image: "/assets/imgs/dummy.jpg",
    link: "https://dpbh.nv.gov/uploadedFiles/dpbhnvgov/content/Boards/BOH/Meetings/2021/SENEFF~1.PDF",
    categories: ["Study"],
  },
  {
    title: "COVID-19 mRNA vaccination leading to CNS inflammation: a case series",
    link: "https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8417681/",
    categories: ["Study"],
  },
  {
    title: "SARS–CoV–2 Spike Impairs DNA Damage Repair and Inhibits V(D)J Recombination In Vitro",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8538446/",
    categories: ["Study"],
  },
  {
    title: "Promising biomarker for the early, non-invasive diagnosis of myocarditis",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/34103712/",
    categories: ["Study"],
  },
  {
    title: "Comprehensive investigations revealed consistent pathophysiological alterations after vaccination with COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8546144/#__ffn_sectitle",
    categories: ["Study"],
  },
  {
    title: "Exposure to SARS-CoV-2 generates T-cell memory in the absence of a detectable viral infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41467-021-22036-z.pdf",
    categories: ["Study"],
  },
  {
    title: "SARS–CoV–2 Spike Impairs DNA Damage Repair and Inhibits V(D)J Recombination In Vitro",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.mdpi.com/1999-4915/13/10/2056/htm",
    categories: ["Study"],
  },
  {
    title: "Anti–spike IgG causes severe acute lung injury by skewing macrophage responses during acute SARS-CoV infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://insight.jci.org/articles/view/123158",
    categories: ["Study"],
  },
  {
    title: "Worse Than the Disease? Reviewing Some Possible Unintended Consequences of the mRNA Vaccines Against COVID-19",
    image: "/assets/imgs/dummy.jpg",
    link: "https://ijvtpr.com/index.php/IJVTPR/article/view/23",
    categories: ["Study"],
  },
  {
    title: "Comprehensive investigations revealed consistent pathophysiological alterations after vaccination with COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41421-021-00329-3",
    categories: ["Study"],
  },
  {
    title: "Prevalence of Clinical and Subclinical Myocarditis in Competitive Athletes With Recent SARS-CoV-2 Infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2780548",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1",
    categories: ["Study"],
  },
  {
    title: "The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both adaptive and innate immune responses",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1",
    categories: ["Study vaccine damages innate immunity"],
  },
  {
    title: "CD8+ T cell epitope variations suggest a potential antigen presentation deficiency for spike protein of SARS-CoV-2",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.01.22.427863v1",
    categories: ["CD 8 + study"],
  },
  {
    title: "Comprehensive investigations revealed consistent pathophysiological alterations after vaccination with COVID-19 vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41421-021-00329-3",
    categories: ["CD 8 + study"],
  },
  {
    title: "Neutralizing Antibody Responses to Severe Acute Respiratory Syndrome Coronavirus 2 in Coronavirus Disease 2019 Inpatients and Convalescent Patients",
    image: "/assets/imgs/dummy.jpg",
    link: "https://academic.oup.com/cid/article/71/10/2688/5851474",
    categories: ["Study high antibodies severe illness"],
  },
  {
    title: "Reverse-transcribed SARS-CoV-2 RNA can integrate into the genome of cultured human cells and can be expressed in patient-derived tissues",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.pnas.org/content/118/21/e2105968118",
    categories: ["Study"],
  },
  {
    title: "Age-specific mortality and immunity patterns of SARS-CoV-2",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41586-020-2918-0",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 specific T cells and antibodies in COVID-19 protection: a prospective study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.19.21262278v2",
    categories: ["Study"],
  },
  {
    title: "The spike protein of SARS-CoV-2 variant A.30 is heavily mutated and evades vaccine-induced antibodies with high efficiency",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41423-021-00779-5",
    categories: ["Study"],
  },
  {
    title: "Prevalence of Clinical and Subclinical Myocarditis in Competitive Athletes With Recent SARS-CoV-2 Infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2780548",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 specific T cells and antibodies in COVID-19 protection: a prospective study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.19.21262278v2",
    categories: ["Study"],
  },
  {
    title: "The spike protein of SARS-CoV-2 variant A.30 is heavily mutated and evades vaccine-induced antibodies with high efficiency",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41423-021-00779-5",
    categories: ["Study"],
  },
  {
    title: "Effect of 12 mg vs 6 mg of Dexamethasone on the Number of Days Alive Without Life Support in Adults With COVID-19 and Severe HypoxemiaThe COVID STEROID 2 Randomized Trial",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jama/fullarticle/2785529?guestAccessKey=f16ca8fa-443d-42e2-8d9e-9a70ecbfb072&amp;utm_source=silverchair&amp;utm_medium=email&amp;utm_campaign=article_alert-jama&amp;utm_term=mostread&amp;utm_content=olf-widget_10222021",
    categories: ["Study"],
  },
  {
    title: "Distinct antibody responses to SARS-CoV-2 in children and adults across the COVID-19 clinical spectrum",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nature.com/articles/s41590-020-00826-9?campaign_id=154&amp;emc=edit_cb_20201106&amp;instance_id=23895&amp;nl=coronavirus-briefing&amp;regi_id=61609026&amp;segment_id=43815&amp;te=1&amp;user_id=73aefc51739a420f3d188e5...",
    categories: ["Study"],
  },
  {
    title: "Prevalence, control, and treatment of diabetes, hypertension, and high cholesterol in the Amish",
    image: "/assets/imgs/dummy.jpg",
    link: "https://drc.bmj.com/content/8/1/e000912",
    categories: ["Study"],
  },
  {
    title: "Vitamin D and COVID-19: evidence and recommendations for supplementation",
    image: "/assets/imgs/dummy.jpg",
    link: "https://royalsocietypublishing.org/doi/10.1098/rsos.201912",
    categories: ["Study"],
  },
  {
    title: "An autocrine Vitamin D-driven Th1 shutdown program can be exploited for COVID-19",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/biorxiv/early/2020/07/19/2020.07.18.210161.full.pdf",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 Spike Protein Elicits Cell Signaling in Human Host Cells: Implications for Possible Consequences of COVID-19 Vaccines",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.mdpi.com/2076-393X/9/1/36/htm",
    categories: ["Study"],
  },
  {
    title: "Severity of Disease Among Adults Hospitalized with Laboratory-Confirmed COVID-19 Before and During the Period of SARS-CoV-2 B.1.617.2 (Delta) Predominance — COVID-NET, 14 States, January–August 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.cdc.gov/mmwr/volumes/70/wr/pdfs/mm7043e1-H.pdf",
    categories: ["Study"],
  },
  {
    title: "The D614G mutations in the SARS-CoV-2 spike protein: Implications for viral infectivity, disease severity and vaccine design",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7643658/",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1",
    categories: ["Study"],
  },
  {
    title: "Why are we vaccinating children against COVID-19? Kostoff",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S221475002100161X?via%3Dihub",
    categories: ["Study"],
  },
  {
    title: "Shedding of Infectious SARS-CoV-2 Despite Vaccination study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v4.full.pdf",
    categories: ["Riemersma study"],
  },
  {
    title: "Outbreak of SARS-CoV-2 Infections, Including COVID-19 Vaccine Breakthrough Infections, Associated with Large Public Gatherings – Barnstable County, Massachusetts, July 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/34351882/",
    categories: ["Study"],
  },
  {
    title: "The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta variant transmission",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v2",
    categories: ["Study"],
  },
  {
    title: "Waning Immune Humoral Response to BNT162b2 Covid-19 Vaccine over 6 Months",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2114583",
    categories: ["Delta waning immunity"],
  },
  {
    title: "Waning of BNT162b2 Vaccine Protection against SARS-CoV-2 Infection in Qatar",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2114114",
    categories: ["Delta waning immunity"],
  },
  {
    title: "The D614G mutations in the SARS-CoV-2 spike protein: Implications for viral infectivity, disease severity and vaccine design",
    image: "/assets/imgs/dummy.jpg",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7643658/",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1",
    categories: ["Study Hoeg"],
  },
  {
    title: "Why are we vaccinating children against COVID-19? Kostoff",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.sciencedirect.com/science/article/pii/S221475002100161X?via%3Dihub",
    categories: ["Study"],
  },
  {
    title: "Shedding of Infectious SARS-CoV-2 Despite Vaccination study",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v4.full.pdf",
    categories: ["Riemersma Study"],
  },
  {
    title: "Outbreak of SARS-CoV-2 Infections, Including COVID-19 Vaccine Breakthrough Infections, Associated with Large Public Gatherings – Barnstable County, Massachusetts, July 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/34351882/",
    categories: ["Study"],
  },
  {
    title: "The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta variant transmission",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v2",
    categories: ["Study"],
  },
  {
    title: "Rapid and parallel adaptive mutations in spike S1 drive clade success in SARS-CoV-2",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.09.11.459844v1.full",
    categories: ["Study"],
  },
  {
    title: "Vaccinated and unvaccinated individuals have similar viral loads in communities with a high prevalence of the SARS-CoV-2 delta variant",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v1",
    categories: ["Riemersma"],
  },
  {
    title: "Natural infection vs vaccination: Which gives more protection?",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.israelnationalnews.com/News/News.aspx/309762",
    categories: ["Study"],
  },
  {
    title: "Nearly 40% of new COVID patients were vaccinated – compared to just 1% who had been infected previously.",
    image: "/assets/imgs/dummy.jpg",
    link: "",
    categories: ["Study"],
  },
  {
    title: "Addressing anti-syncytin antibody levels, and fertility and breastfeeding concerns, following BNT162B2 COVID-19 mRNA vaccination",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.05.23.21257686v1",
    categories: ["Study"],
  },
  {
    title: "Waning Immune Humoral Response to BNT162b2 Covid-19 Vaccine over 6 Months",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2114583",
    categories: ["Delta waning immunity"],
  },
  {
    title: "Waning of BNT162b2 Vaccine Protection against SARS-CoV-2 Infection in Qatar",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2114114",
    categories: ["Delta waning immunity"],
  },
  {
    title: "Nosocomial outbreak caused by the SARS-CoV-2 Delta variant in a highly vaccinated population, Israel, July 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2021.26.39.2100822#html_fulltext",
    categories: ["Delta spread vaccinated"],
  },
  {
    title: "Shedding of Infectious SARS-CoV-2 Despite Vaccination when the Delta Variant is Prevalent – Wisconsin, July 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v3.full.pdf",
    categories: ["Delta spread vaccinated"],
  },
  {
    title: "Comparing SARS-CoV-2 natural immunity to vaccine-induced immunity: reinfections versus breakthrough infections Gazit Delta spread vaccinated",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.24.21262415v1.full",
    categories: ["Delta spread vaccinated Gazit"],
  },
  {
    title: "Transmission of SARS-CoV-2 Delta Variant Among Vaccinated Healthcare Workers, Vietnam",
    image: "/assets/imgs/dummy.jpg",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3897733",
    categories: ["Delta spread vaccinated"],
  },
  {
    title: "The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta variant transmission",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1",
    categories: ["Delta spread vaccinated"],
  },
  {
    title: "Durability of immune responses to the BNT162b2 mRNA vaccine",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.biorxiv.org/content/10.1101/2021.09.30.462488v1",
    categories: ["Delta spread vaccinated"],
  },
  {
    title: "Docked severe acute respiratory syndrome coronavirus 2 proteins within the cutaneous and subcutaneous microvasculature and their role in the pathogenesis of severe coronavirus disease 2019",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/33058948/",
    categories: ["Study"],
  },
  {
    title: "Magro et al. showing that following entry into the bloodstream, spike protein directs complement attack to the inner vessel lining, causing damage and leakiness of the blood vessels complement immune system",
    image: "/assets/imgs/dummy.jpg",
    link: "",
    categories: ["Study"],
  },
  {
    title: "SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children Ages 12-17: A Stratified National Database Analysis",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1",
    categories: ["Study"],
  },
  {
    title: "Association of Receipt of the Ad26.COV2.S COVID-19 Vaccine With Presumptive Guillain-Barré Syndrome, February-July 2021",
    image: "/assets/imgs/dummy.jpg",
    link: "https://jamanetwork.com/journals/jama/fullarticle/2785009",
    categories: ["Study"],
  },
  {
    title: "A Systematic Review of the Protective Effect of Prior SARS-CoV-2 Infection on Repeat Infection",
    image: "/assets/imgs/dummy.jpg",
    link: "https://pubmed.ncbi.nlm.nih.gov/34592838/",
    categories: ["Study"],
  },
  {
    title: "Necessity of COVID-19 vaccination in previously infected individuals",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v3",
    categories: ["Study"],
  },
  {
    title: "The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta variant transmission",
    image: "/assets/imgs/dummy.jpg",
    link: "https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1.full",
    categories: ["Study"],
  },
];
let span = {
  left: {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 16,
    xl: 16,
    xxl: 16,
  },
  right: {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 8,
    xl: 8,
    xxl: 8,
  },
};
// let { section } = useParams();
const title = {
  default: {
    title: "Most",
    sub: "Scientific Studies",
  },
};
const getTitle = title || title.default;
export const ScientificStudies = (props) => {
  return (
    <Row id="archives_scientific_studies">
      <Col {...span.left}>
        {/* <NewsFlash /> */}
        <StoryBody
          data={scientific_studies}
          title={getTitle.title}
          title_blue={getTitle.sub}
        />
      </Col>
      <Col {...span.right}>
        <RightSide {...props} />
      </Col>
      <Col span={24} className="d-none">
        <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
          <div className="et_pb_text_inner">
            <p>
              <strong>
                <a href="https://www.sciencedirect.com/science/article/pii/S2772613421000068#bib0002">
                  The “original antigenic sin” and its relevance for SARS-CoV-2
                  (COVID-19) vaccination
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://onlinelibrary.wiley.com/doi/10.1111/eci.13554">
                  Reconciling estimates of global spread and infection fatality
                  rates of COVID-19: An overview of systematic evaluations
                </a>{" "}
                study Ioannidis
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/2784128">
                  Cribriform Plate Injury After Nasal Swab Testing for COVID-19
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://pubmed.ncbi.nlm.nih.gov/34749010/">
                  Negative effect of the second dose of the BNT162b2 vaccine in
                  a significant percentage of individuals with previous COVID
                  infection
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41421-021-00329-3">
                  Comprehensive investigations revealed consistent
                  pathophysiological alterations after vaccination with COVID-19
                  vaccines
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://palexander.substack.com/p/subramanian-and-kumars-study-see?justPublished=true">
                  Subramanian and Kumar’s study (see graph) showed us all we
                  needed to know: there is NO association between levels of
                  population vaccination and infection/cases burden; NONE
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.07.07.21260122v2">
                  Viral infection and transmission in a large, well-traced
                  outbreak caused by the SARS-CoV-2 Delta variant
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://academic.oup.com/cid/advance-article-abstract/doi/10.1093/cid/ciab989/6445179?redirectedFrom=fulltext">
                  Epidemiology of Acute Myocarditis/Pericarditis in Hong Kong
                  Adolescents Following Comirnaty Vaccination
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.bmj.com/content/375/bmj-2021-068665">
                  SARS-CoV-2 vaccination and myocarditis or myopericarditis:
                  population based cohort study
                </a>{" "}
                study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/10.1101/2021.10.24.465626v1">
                  SARS-CoV-2 infects human adipose tissue and elicits an
                  inflammatory response consistent with severe COVID-19 study
                </a>{" "}
                study (underlying risk factor for COVID)&nbsp;
                <span lang="en-US"></span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.12.02.21267156v1">
                  Epidemiology of myocarditis and pericarditis following mRNA
                  vaccines in Ontario, Canada: by vaccine product, schedule and
                  interval
                </a>{" "}
                study (myocarditis)
              </strong>
            </p>
            <p>
              <strong>
                <span lang="en-US">
                  <a href="https://www.medrxiv.org/content/10.1101/2021.04.15.21252192v1">
                    Previous COVID-19 infection but not Long-COVID is associated
                    with increased adverse events following BNT162b2/Pfizer
                    vaccination
                  </a>{" "}
                  study (vaccine safety)
                </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.12.07.21267432v1">
                  <span lang="en-US">
                    Reduced Neutralization of SARS-CoV-2 Omicron Variant by
                    Vaccine Sera and monoclonal antibodies
                  </span>
                </a>
                <span lang="en-US"> Study </span>(vaccine failure/failed
                breakthrough infection/Delta/omicron)
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1.full">
                  The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both
                  adaptive and innate immune responses
                </a>{" "}
                Study (natural/innate immunity)
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8565092/">
                  Appendicitis as a possible safety signal for the COVID-19
                  vaccines
                </a>{" "}
                Study (vaccine safety){" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/PIIS0140673621027173.pdf">
                  <span lang="en-US">
                    Safety and immunogenicity of seven COVID-19 vaccines as a
                    third dose (booster) following two doses of ChAdOx1 nCov-19
                    or BNT162b2 in the UK (COV-BOOST): a blinded, multicentre,
                    randomised, controlled, phase 2 trial
                  </span>
                </a>
                <span lang="en-US"> </span>Study (vaccine safety)
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/10.1101/2021.10.24.465626v1">
                  SARS-CoV-2 infects human adipose tissue and elicits an
                  inflammatory response consistent with severe COVID-19 study
                </a>{" "}
                study (underlying risk factor for COVID){" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.12.02.21267156v1">
                  Epidemiology of myocarditis and pericarditis following mRNA
                  vaccines in Ontario, Canada: by vaccine product, schedule and
                  interval
                </a>{" "}
                study (myocarditis)
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.04.15.21252192v1">
                  Previous COVID-19 infection but not Long-COVID is associated
                  with increased adverse events following BNT162b2/Pfizer
                  vaccination
                </a>{" "}
                study (vaccine safety)
              </strong>
            </p>
            <p>
              <strong>
                <a href="file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/2021.12.04.21267114v1.full%20(1).pdf">
                  <span lang="en-US">
                    Protection and waning of natural and hybrid COVID-19
                    immunity
                  </span>
                </a>
                <span lang="en-US"> Study</span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.12.03.21266419v1">
                  Guillain-Barré Syndrome after COVID-19 Vaccination in the
                  Vaccine Safety Datalink
                </a>{" "}
                Study harms{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.12.07.21267432v1">
                  <span lang="en-US">
                    Reduced Neutralization of SARS-CoV-2 Omicron Variant by
                    Vaccine Sera and monoclonal antibodies
                  </span>
                </a>
                <span lang="en-US"> Study </span>(vaccine failure/failed
                breakthrough infection/Delta/omicron)
              </strong>
            </p>
            <p lang="en-US">
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1.full">
                  The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both
                  adaptive and innate immune responses
                </a>{" "}
                Study (natural/innate immunity)
              </strong>
            </p>
            <p lang="en-US">
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8565092/">
                  Appendicitis as a possible safety signal for the COVID-19
                  vaccines
                </a>{" "}
                Study (vaccine safety){" "}
              </strong>
            </p>
            <p lang="en-US">
              <strong>
                <a href="file:///Users/geoffrey.smith/Library/Containers/com.apple.mail/Data/Library/Mail%20Downloads/Downloads/PIIS0140673621027173.pdf">
                  <span lang="en-US">
                    Safety and immunogenicity of seven COVID-19 vaccines as a
                    third dose (booster) following two doses of ChAdOx1 nCov-19
                    or BNT162b2 in the UK (COV-BOOST): a blinded, multicentre,
                    randomised, controlled, phase 2 trial
                  </span>
                </a>
                <span lang="en-US"> </span>Study (vaccine safety)
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.tandfonline.com/doi/full/10.1080/13696998.2021.2002063">
                  <span lang="en-US">
                    Evaluation of COVID-19 vaccine breakthrough infections among
                    immunocompromised patients fully vaccinated with BNT162b2
                  </span>
                </a>
                <span lang="en-US"> Study </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2786890?utm_campaign=articlePDF&amp;utm_medium=articlePDFlink&amp;utm_source=articlePDF&amp;utm_content=jamainternmed.2021.7382">
                  <span lang="en-US">
                    Odds of Testing Positive for SARS-CoV-2 Following Receipt of
                    3 vs 2 Doses of the BNT162b2 mRNA Vaccine
                  </span>
                </a>
                <span lang="en-US"> Study</span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://portlandpress.com/clinsci/article/doi/10.1042/CS20210735/230273/The-SARS-CoV-2-Spike-protein-disrupts-human">
                  The SARS-CoV-2 Spike protein disrupts human cardiac pericytes
                  function through CD147-receptor-mediated signalling: a
                  potential non-infective mechanism of COVID-19 microvascular
                  disease
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.11.12.21265796v1">
                  Transmission potential of vaccinated and unvaccinated persons
                  infected with the SARS-CoV-2 Delta variant in a federal
                  prison, July—August 2021
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.11.24.21266735v1.full.pdf">
                  <span lang="en-US">
                    Increased risk of infection with SARS-CoV-2 Beta, Gamma, and
                    Delta variant 2 compared to Alpha variant in vaccinated
                    individuals
                  </span>
                </a>
                <span lang="en-US"> Study </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMcibr2113694">
                  A Possible Role for Anti-idiotype Antibodies in SARS-CoV-2
                  Infection and Vaccination
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.11.12.21265796v1">
                  Transmission potential of vaccinated and unvaccinated persons
                  infected with the SARS-CoV-2 Delta variant in a federal
                  prison, July-August 2021
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/d41586-021-02483-w">
                  The tangled history of mRNA vaccines
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ahajournals.org/doi/abs/10.1161/circ.144.suppl_1.10712">
                  Abstract 10712: Mrna COVID Vaccines Dramatically Increase
                  Endothelial Inflammatory Markers and ACS Risk as Measured by
                  the PULS Cardiac Test: a Warning
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://jamanetwork.com/journals/jama/fullarticle/2785918?guestAccessKey=c1f38ae9-9e7c-423b-a933-37c134185235&amp;utm_source=silverchair&amp;utm_campaign=jama_network&amp;utm_content=covid_weekly_highlights&amp;utm_medium=email">
                  Association of Prior SARS-CoV-2 Infection With Risk of
                  Breakthrough Infection Following mRNA Vaccination in Qatar
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/10.1101/2021.06.25.449905v1">
                  Persistence of SARS CoV-2 S1 Protein in CD16+ Monocytes in
                  Post-Acute Sequelae of COVID-19 (PASC) Up to 15 Months
                  Post-Infection
                </a>{" "}
                Study long COVID{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.news-medical.net/news/20210628/Differences-in-monocyte-subsets-between-severe-COVID-19-and-long-COVID.aspx">
                  Differences in monocyte subsets between severe COVID-19 and
                  long COVID
                </a>{" "}
                Study long COVID
              </strong>
            </p>
            <p lang="en-US" align="CENTER">
              <strong>
                <a href="https://www.bmj.com/content/375/bmj.n2635">
                  Covid-19: Researcher blows the whistle on data integrity
                  issues in Pfizer’s vaccine trial
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://dpbh.nv.gov/uploadedFiles/dpbhnvgov/content/Boards/BOH/Meetings/2021/SENEFF~1.PDF">
                  <span lang="en-US">
                    Worse Than the Disease? Reviewing Some Possible Unintended
                    Consequences of the mRNA Vaccines Against COVID-19
                  </span>
                </a>
                <span lang="en-US"> Study </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8417681/">
                  COVID-19 mRNA vaccination leading to CNS inflammation: a case
                  series
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8538446/">
                  SARS–CoV–2 Spike Impairs DNA Damage Repair and Inhibits V(D)J
                  Recombination In Vitro
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://pubmed.ncbi.nlm.nih.gov/34103712/">
                  Promising biomarker for the early, non-invasive diagnosis of
                  myocarditis
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8546144/#__ffn_sectitle">
                  Comprehensive investigations revealed consistent
                  pathophysiological alterations after vaccination with COVID-19
                  vaccines
                </a>{" "}
                Study reduced CD 8 +
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.11.02.21265789v1">
                  SARS-CoV-2 infection induces cross-reactive autoantibodies
                  against angiotensin II
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41467-021-22036-z.pdf">
                  <span lang="en-US">
                    Exposure to SARS-CoV-2 generates T-cell memory in the
                    absence of a detectable viral infection
                  </span>
                </a>
                <span lang="en-US"> Study </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.mdpi.com/1999-4915/13/10/2056/htm">
                  SARS–CoV–2 Spike Impairs DNA Damage Repair and Inhibits V(D)J
                  Recombination In Vitro
                </a>{" "}
                Study
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://insight.jci.org/articles/view/123158">
                  Anti–spike IgG causes severe acute lung injury by skewing
                  macrophage responses during acute SARS-CoV infection
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://ijvtpr.com/index.php/IJVTPR/article/view/23">
                  Worse Than the Disease? Reviewing Some Possible Unintended
                  Consequences of the mRNA Vaccines Against COVID-19
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41421-021-00329-3">
                  Comprehensive investigations revealed consistent
                  pathophysiological alterations after vaccination with COVID-19
                  vaccines
                </a>{" "}
                Study{" "}
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2780548">
                  Prevalence of Clinical and Subclinical Myocarditis in
                  Competitive Athletes With Recent SARS-CoV-2 Infection
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1">
                  SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children
                  Ages 12-17: A Stratified National Database Analysis
                </a>{" "}
                Study&nbsp; Hoeg
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.05.03.21256520v1">
                  The BNT162b2 mRNA vaccine against SARS-CoV-2 reprograms both
                  adaptive and innate immune responses
                </a>{" "}
                Study vaccine damages innate immunity&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/10.1101/2021.01.22.427863v1">
                  CD8+ T cell epitope variations suggest a potential antigen
                  presentation deficiency for spike protein of SARS-CoV-2
                </a>{" "}
                CD 8 + study
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41421-021-00329-3">
                  Comprehensive investigations revealed consistent
                  pathophysiological alterations after vaccination with COVID-19
                  vaccines
                </a>{" "}
                CD 8 + study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://academic.oup.com/cid/article/71/10/2688/5851474">
                  Neutralizing Antibody Responses to Severe Acute Respiratory
                  Syndrome Coronavirus 2 in Coronavirus Disease 2019 Inpatients
                  and Convalescent Patients
                </a>{" "}
                Study high antibodies severe illness&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.pnas.org/content/118/21/e2105968118">
                  Reverse-transcribed SARS-CoV-2 RNA can integrate into the
                  genome of cultured human cells and can be expressed in
                  patient-derived tissues
                </a>{" "}
                Study
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41586-020-2918-0">
                  Age-specific mortality and immunity patterns of SARS-CoV-2
                </a>{" "}
                Study&nbsp;
              </strong>
            </p>
            <p className="p1">
              <strong>
                <span className="s1">
                  <span className="Apple-converted-space">&nbsp;</span>
                  <a href="https://www.medrxiv.org/content/10.1101/2021.08.19.21262278v2">
                    <span className="s2">
                      SARS-CoV-2 specific T cells and antibodies in COVID-19
                      protection: a prospective study
                    </span>
                  </a>
                  <span className="Apple-converted-space">&nbsp;</span>
                </span>
              </strong>
            </p>
            <p className="p1">
              <strong>
                <span className="s3">
                  <a href="https://www.nature.com/articles/s41423-021-00779-5">
                    The spike protein of SARS-CoV-2 variant A.30 is heavily
                    mutated and evades vaccine-induced antibodies with high
                    efficiency
                  </a>
                </span>
              </strong>
            </p>
            <p className="p1">
              <strong>
                <span className="s1">
                  <a href="https://jamanetwork.com/journals/jamacardiology/fullarticle/2780548">
                    Prevalence of Clinical and Subclinical Myocarditis in
                    Competitive Athletes With Recent SARS-CoV-2 Infection
                  </a>
                </span>
                <span className="s2">
                  <span className="Apple-converted-space">&nbsp;</span>
                </span>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.08.19.21262278v2">
                  SARS-CoV-2 specific T cells and antibodies in COVID-19
                  protection: a prospective study
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41423-021-00779-5">
                  The spike protein of SARS-CoV-2 variant A.30 is heavily
                  mutated and evades vaccine-induced antibodies with high
                  efficiency
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://jamanetwork.com/journals/jama/fullarticle/2785529?guestAccessKey=f16ca8fa-443d-42e2-8d9e-9a70ecbfb072&amp;utm_source=silverchair&amp;utm_medium=email&amp;utm_campaign=article_alert-jama&amp;utm_term=mostread&amp;utm_content=olf-widget_10222021">
                  Effect of 12 mg vs 6 mg of Dexamethasone on the Number of Days
                  Alive Without Life Support in Adults With COVID-19 and Severe
                  HypoxemiaThe COVID STEROID 2 Randomized Trial
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nature.com/articles/s41590-020-00826-9?campaign_id=154&amp;emc=edit_cb_20201106&amp;instance_id=23895&amp;nl=coronavirus-briefing&amp;regi_id=61609026&amp;segment_id=43815&amp;te=1&amp;user_id=73aefc51739a420f3d188e5...">
                  Distinct antibody responses to SARS-CoV-2 in children and
                  adults across the COVID-19 clinical spectrum
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://drc.bmj.com/content/8/1/e000912">
                  Prevalence, control, and treatment of diabetes, hypertension,
                  and high cholesterol in the Amish
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://royalsocietypublishing.org/doi/10.1098/rsos.201912">
                  Vitamin D and COVID-19: evidence and recommendations for
                  supplementation
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/biorxiv/early/2020/07/19/2020.07.18.210161.full.pdf">
                  An autocrine Vitamin D-driven Th1 shutdown program can be
                  exploited for COVID-19
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.mdpi.com/2076-393X/9/1/36/htm">
                  SARS-CoV-2 Spike Protein Elicits Cell Signaling in Human Host
                  Cells: Implications for Possible Consequences of COVID-19
                  Vaccines
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.cdc.gov/mmwr/volumes/70/wr/pdfs/mm7043e1-H.pdf">
                  Severity of Disease Among Adults Hospitalized with
                  Laboratory-Confirmed COVID-19 Before and During the Period of
                  SARS-CoV-2 B.1.617.2 (Delta) Predominance — COVID-NET, 14
                  States, January–August 2021
                </a>
                &nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7643658/">
                  The D614G mutations in the SARS-CoV-2 spike protein:
                  Implications for viral infectivity, disease severity and
                  vaccine design
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1">
                  SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children
                  Ages 12-17: A Stratified National Database Analysis
                </a>{" "}
                study Hoeg
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.sciencedirect.com/science/article/pii/S221475002100161X?via%3Dihub">
                  Why are we vaccinating children against COVID-19? Kostoff
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v4.full.pdf">
                  Shedding of Infectious SARS-CoV-2 Despite Vaccination study
                </a>{" "}
                Riemersma study&nbsp;&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://pubmed.ncbi.nlm.nih.gov/34351882/">
                  Outbreak of SARS-CoV-2 Infections, Including COVID-19 Vaccine
                  Breakthrough Infections, Associated with Large Public
                  Gatherings – Barnstable County, Massachusetts, July 2021
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v2">
                  The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta
                  variant transmission
                </a>
                &nbsp; study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2114583">
                  Waning Immune Humoral Response to BNT162b2 Covid-19 Vaccine
                  over 6 Months
                </a>{" "}
                Delta waning immunity&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2114114">
                  Waning of BNT162b2 Vaccine Protection against SARS-CoV-2
                  Infection in Qatar
                </a>{" "}
                Delta waning immunity
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7643658/">
                  The D614G mutations in the SARS-CoV-2 spike protein:
                  Implications for viral infectivity, disease severity and
                  vaccine design
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1">
                  SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children
                  Ages 12-17: A Stratified National Database Analysis
                </a>{" "}
                study Hoeg
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.sciencedirect.com/science/article/pii/S221475002100161X?via%3Dihub">
                  Why are we vaccinating children against COVID-19? Kostoff
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v4.full.pdf">
                  Shedding of Infectious SARS-CoV-2 Despite Vaccination study
                </a>{" "}
                Riemersma study&nbsp;&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://pubmed.ncbi.nlm.nih.gov/34351882/">
                  Outbreak of SARS-CoV-2 Infections, Including COVID-19 Vaccine
                  Breakthrough Infections, Associated with Large Public
                  Gatherings – Barnstable County, Massachusetts, July 2021
                </a>{" "}
                study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v2">
                  The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta
                  variant transmission
                </a>
                &nbsp; study&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.biorxiv.org/content/10.1101/2021.09.11.459844v1.full">
                  Rapid and parallel adaptive mutations in spike S1 drive clade
                  success in SARS-CoV-2
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v1">
                  Vaccinated and unvaccinated individuals have similar viral
                  loads in communities with a high prevalence of the SARS-CoV-2
                  delta variant
                </a>{" "}
                Riemersma&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.israelnationalnews.com/News/News.aspx/309762">
                  Natural infection vs vaccination: Which gives more protection?
                </a>
              </strong>
            </p>
            <p>
              <strong>
                Nearly 40% of new COVID patients were vaccinated – compared to
                just 1% who had been infected previously.
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.medrxiv.org/content/10.1101/2021.05.23.21257686v1">
                  Addressing anti-syncytin antibody levels, and fertility and
                  breastfeeding concerns, following BNT162B2 COVID-19 mRNA
                  vaccination
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2114583">
                  Waning Immune Humoral Response to BNT162b2 Covid-19 Vaccine
                  over 6 Months
                </a>{" "}
                Delta waning immunity&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2114114">
                  Waning of BNT162b2 Vaccine Protection against SARS-CoV-2
                  Infection in Qatar
                </a>{" "}
                Delta waning immunity&nbsp;
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2021.26.39.2100822#html_fulltext"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2021.26.39.2100822%23html_fulltext&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNE5TFPMN6U8x6tcSacr6l4VlkfiqA"
                >
                  Nosocomial outbreak caused by the SARS-CoV-2 Delta variant in
                  a highly vaccinated population, Israel, July 2021
                </a>
                &nbsp;Delta spread vaccinated
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v3.full.pdf"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.07.31.21261387v3.full.pdf&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNHuE51O2sSqRTuxZAfx-cNsTSJB-Q"
                >
                  <span lang="EN-US">
                    Shedding of Infectious SARS-CoV-2 Despite Vaccination when
                    the Delta Variant is Prevalent – Wisconsin, July 2021
                  </span>
                </a>
                <span lang="EN-US">&nbsp;Delta spread vaccinated</span>
                <span lang="EN-US">&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.08.24.21262415v1.full"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.08.24.21262415v1.full&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEhIwbsWZffMi2J5nbo3N0swO4ZXQ"
                >
                  Comparing SARS-CoV-2 natural immunity to vaccine-induced
                  immunity: reinfections versus breakthrough infections Gazit
                  Delta spread vaccinated
                </a>
                &nbsp;Delta spread vaccinated Gazit
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3897733"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://papers.ssrn.com/sol3/papers.cfm?abstract_id%3D3897733&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNHhukzHifAngsBgFf1kGc698nznng"
                >
                  Transmission of SARS-CoV-2 Delta Variant Among Vaccinated
                  Healthcare Workers, Vietnam
                </a>
                &nbsp;Delta spread vaccinated
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEe5BpvRRdcJ-clRccxsE-0sehmbg"
                >
                  The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta
                  variant transmission
                </a>
                &nbsp;Delta spread vaccinated
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.biorxiv.org/content/10.1101/2021.09.30.462488v1"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.biorxiv.org/content/10.1101/2021.09.30.462488v1&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNEJTi9fRLLDslo2bk5Y8hJyhCTCXA"
                >
                  Durability of immune responses to the BNT162b2 mRNA vaccine
                </a>
                &nbsp;Delta spread vaccinated
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/33058948/"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://pubmed.ncbi.nlm.nih.gov/33058948/&amp;source=gmail&amp;ust=1634719447173000&amp;usg=AFQjCNGsfBXnoWcQjYnLbnZTCce1kewfpw"
                >
                  Docked severe acute respiratory syndrome coronavirus 2
                  proteins within the cutaneous and subcutaneous
                  microvasculature and their role in the pathogenesis of severe
                  coronavirus disease 2019
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <span lang="EN-US">
                  Magro et al. showing that following entry into the
                  bloodstream, spike protein directs complement attack to the
                  inner vessel lining, causing damage and leakiness of the blood
                  vessels complement immune system
                </span>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.08.30.21262866v1&amp;source=gmail&amp;ust=1634719447174000&amp;usg=AFQjCNFECsasmUF4MKOPIpnxAsEHj_jI4w"
                >
                  SARS-CoV-2 mRNA Vaccination-Associated Myocarditis in Children
                  Ages 12-17: A Stratified National Database Analysis
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://jamanetwork.com/journals/jama/fullarticle/2785009"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://jamanetwork.com/journals/jama/fullarticle/2785009&amp;source=gmail&amp;ust=1634719447174000&amp;usg=AFQjCNHYaZmm7cEqZ-UcnHrxUQKWSafNHQ"
                >
                  Association of Receipt of the Ad26.COV2.S COVID-19 Vaccine
                  With Presumptive Guillain-Barré Syndrome, February-July 2021
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <span lang="EN-US">
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34592838/"
                    target="_blank"
                    rel="nofollow noopener"
                    data-saferedirecturl="https://www.google.com/url?q=https://pubmed.ncbi.nlm.nih.gov/34592838/&amp;source=gmail&amp;ust=1634719447174000&amp;usg=AFQjCNHF4dHRq3fqx80lz-1AzCCFNnAt3A"
                  >
                    A Systematic Review of the Protective Effect of Prior
                    SARS-CoV-2 Infection on Repeat Infection
                  </a>
                </span>
                <span lang="EN-US">&nbsp;</span>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v3"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.06.01.21258176v3&amp;source=gmail&amp;ust=1634719447174000&amp;usg=AFQjCNH6S6ckbhWjiDFF_jypDCm7VYySag"
                >
                  Necessity of COVID-19 vaccination in previously infected
                  individuals
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1.full"
                  target="_blank"
                  rel="nofollow noopener"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.medrxiv.org/content/10.1101/2021.09.28.21264260v1.full&amp;source=gmail&amp;ust=1634719447174000&amp;usg=AFQjCNFiJZW4XHba9zXrQapSv4w_muRWfg"
                >
                  The impact of SARS-CoV-2 vaccination on Alpha &amp; Delta
                  variant transmission
                </a>
              </strong>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScientificStudies);
