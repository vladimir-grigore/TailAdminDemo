import PageMeta from "../../components/common/PageMeta";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";


export default function PortalRecoverPassword() {
  return (
    <>
      <PageMeta
        title="Recover Password"
        description="Password recovery page"
      />
      <div className="flex items-center justify-center min-h-screen bg-gray-25 dark:bg-gray-900">
        <div className="flex flex-col items-center w-full">
          <img
            src="/images/brand/buoy-local-logo-empowering.png"
            alt="Buoy Local Logo"
            className="mb-6 w-32 h-auto"
          />

          <div className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Recover Password</div>

          <form className="w-full max-w-1/3 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="space-y-6">
              <div>
                <Label>
                  Email <span className="text-error-500">*</span>{" "}
                </Label>
                <Input placeholder="info@gmail.com" />
              </div>

              <div>
                <Button className="w-full" size="sm">
                  SUBMIT
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
