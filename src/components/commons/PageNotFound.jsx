import { t } from "i18next";
import { NoData } from "neetoui";

const PageNotFound = () => (
  <div className="absolute left-1/3 top-1/3">
    <NoData
      title={t("pageNotFound")}
      primaryButtonProps={{
        label: t("backHome"),
        className: "bg-neutral-800 hover:bg-neutral-950",
        to: "/",
      }}
    />
  </div>
);

export default PageNotFound;
