import { getCollection } from "@/lib/db.connect.mjs";

export const getServices = async () => {
  const { servicesCollection } = await getCollection();
  const res = await servicesCollection.find().toArray();
  return res;
};
