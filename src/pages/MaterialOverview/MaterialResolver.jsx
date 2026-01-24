import { useParams } from "react-router-dom";

import Rebar from "./Rebar";
import Nails from "./Nails";
import BlackWire from "./Blackwire";
import Staffa from "./Staffa";
import GenericMaterialPage from "./GenericMaterialPage";

const MaterialResolver = () => {
  const { slug } = useParams();

  // Custom hand-built pages (core products)
  if (slug === "rebar") return <Rebar />;
  if (slug === "nails") return <Nails />;
  if (slug === "black-wire") return <BlackWire />;
  if (slug === "staffa") return <Staffa />;

  // Everything else → Sanity CMS
  return <GenericMaterialPage slug={slug} />;
};

export default MaterialResolver;


