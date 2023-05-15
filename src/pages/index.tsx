import { type NextPage } from "next";
import Card from "../components/Card";
import Button from "../components/Button";
import Main from "../layouts/Main";

const Home: NextPage = () => {
  return (
  <>
      <Main>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4">

            {/* Card content */}

                <Card
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis leo nec dictum semper. Etiam vel malesuada est, nec iaculis ante. Donec vel lobortis lacus."
                >
                  <>
                <div
                  className="h-96 min-w-full bg-slate-500 rounded-md"
                >
                  Image
                </div>
                <div className="text-lg">
                  1 ETH
                </div>
                </>
                </Card>
            {/* bottom row  */}
            <div className="flex flex-col gap-1">
                <Button
                  title="Buy"
                  onClick={() => {
                    console.log("button: buy")
                  }}
                  className="bg-highlight text-white"
                />
                <Button
                  title="Redeem"
                  onClick={() => {
                    console.log("button: redeem")
                  }}
                  disabled
                />
                </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
