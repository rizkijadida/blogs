import { Asset } from "@/types/contenful.type";

 export const findAsset = (id: string, assets: Asset[]) => {
    return assets.find((asset: Asset) => asset.sys.id === id);
  };
  