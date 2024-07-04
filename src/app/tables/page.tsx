import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLaout";

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10"></div>
    </DefaultLayout>
  );
};

export default TablesPage;
