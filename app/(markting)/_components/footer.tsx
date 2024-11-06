import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex w-full fixed bottom-0 px-5 border-t bg-slate-100">
      <div className="flex items-center justify-end w-full md:max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between w-full space-x-5 md:block md:w-auto">
          <Button size="lg" variant="link">
            Privacy Policy
          </Button>
          <Button size="lg" variant="link">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
