import { NavButton } from "./NavButton";
import { SecondaryButton } from "./SecondaryButton";

export const Hero = () => {
  return (
    <>
      <div className=" text-text pt-44">
        <div className=" container">
          <div className=" grid grid-cols-3 pb-12 pt-4">
            <div className=" col-span-2 pb-4 mx-16 font-semibold">
              <div className=" text-6xl font-Poppins ">
                Introducing{" "}
                <span className=" bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  Folio
                </span>{" "}
                where books and passions flow
              </div>
            </div>
            <div className=" col-span-2 mx-16  font-light">
              Explore vast literary realms with the personalized touch of our
              cataloging service!
            </div>
            <div className=" col-span-2 mx-16 py-10">
              <div className="grid grid-cols-3">
                <div className=" w-32 text-center col-span-1">
                  <NavButton text={"Get Started"} location={"signup"} />
                </div>
                <div className=" col-span-1 w-32 text-center">
                  <SecondaryButton text={"Learn More"} location={"login"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
