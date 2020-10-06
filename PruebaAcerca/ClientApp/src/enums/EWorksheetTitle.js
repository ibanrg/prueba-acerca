import i18n from '../i18n';
i18n.loadNamespaces("excelWorksheet");
const t = i18n.t.bind(i18n);

    const EWorksheetTitle = {
        Proyectos: t("excelWorksheet:tab.Proyectos"),
        Entregables: t("excelWorksheet:tab.Entregables"),
        Trabajos: t("excelWorksheet:tab.Trabajos"),
        TDR: t("excelWorksheet:tab.TDR"),
        Comunicaciones: t("excelWorksheet:tab.Comunicaciones"),
        Instrucciones: t("excelWorksheet:tab.Instrucciones"),
        UsuariosWP: t("excelWorksheet:tab.UsuariosWP"),
        Datos: t("excelWorksheet:tab.Datos"),
        Hitos: t("excelWorksheet:tab.Hitos"),
        Relaciones_TDR_Entregables: t("excelWorksheet:tab.Relaciones_TDR_Entregable")
    };

export default EWorksheetTitle;
