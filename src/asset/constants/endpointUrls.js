const endpointUrls = {
  // baseUrl: "localhost:3004/api/v1",
  // baseUrl: "https://pharmacy.inhs.ir/devApi/api/v1/para",
  baseUrl: "https://apiparaclinic.inhs.ir/api/v1",

  //globalInfo
  getParaclinicTypes: "/tamin-services/acceptableParTypes",
  estehghagh: "/tamin-services/estehghagh",
  getEprescDetail: "/tamin-services/requestPresc",

  //electronicPrescriptions
  getPatientPrescList: "/tamin-services/paraEPrescriptionList",
  postPresctiption: "/tamin-services/requestParPresc",

  //paperPrescriptions
  getPaperPrescList: "/tamin-services/nonElEpresc",
  searchParaclinicServices: "/tamin-services/acceptableServices",
  postPpresc: "/tamin-services/nonElEpresc",

  //services
  getServicesList: "/tamin-services/acceptableServices",

  //acceptedPrescriptions
  getAcceptedPrescriptions: "/prescriptions",
  deletePresc: "/tamin-services/deleteEpresc",
};

export default endpointUrls;
