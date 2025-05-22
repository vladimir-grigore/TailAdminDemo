import { useState } from "react";
import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "../../icons";


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PageMeta
        title="Sign In"
        description="Sign in to your account"
      />
      <div className="flex items-center justify-center min-h-screen bg-gray-25 dark:bg-gray-900">
        <div className="flex flex-col items-center w-full">
          <img
            src="/images/brand/buoy-local-logo-empowering.png"
            alt="Buoy Local Logo"
            className="mb-6 w-32 h-auto"
          />

          <div className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Login</div>
          
          <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="space-y-6">
              <div>
                <Label>
                  Email <span className="text-error-500">*</span>{" "}
                </Label>
                <Input placeholder="info@gmail.com" />
              </div>

              <div>
                <Label>
                  Password <span className="text-error-500">*</span>{" "}
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    )}
                  </span>
                </div>
              </div>

              <div>
                <Button className="w-full" size="sm">
                  LOGIN
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/signup"
                  className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  or Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
