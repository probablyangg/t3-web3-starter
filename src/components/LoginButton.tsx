import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "./Button";
import useWallet from "../hooks/useWallet";
import formatWalletAddress from "../utils/formatAddress";


const LoginButton = () => {
  const wallet = useWallet();

  if (wallet.isSignedIn) {
    return (
      <Button
        title={formatWalletAddress(wallet.wallet)}
        hoverEffect={false}
      />
    )
  }
  else {
    return (
      // @todo not sure why Button component doesn't work here
      
      // <Button onClick={openConnectModal} title="Connect" />
      <div className=" self-center">
      <ConnectButton label="Connect" />
      </div>
    )
  }
};
export default LoginButton;
