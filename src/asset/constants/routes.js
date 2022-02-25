const routes = {
  home: { path: "/", public: true },
  login: { path: "/login", public: true },
  dashboard: { path: "/dashboard", public: false },
  electronicPrescription: {
    path: "/dashboard/electronicPrescription",
    public: false,
  },
  paperPrescription: { path: "/dashboard/paperPrescription", public: false },
  services: { path: "/dashboard/services", public: false },
  accepted: { path: "/dashboard/accepted", public: false },
};

export default routes;
