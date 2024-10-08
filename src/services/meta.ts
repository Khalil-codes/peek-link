import { getBaseUrl } from "@/lib/utils";
import { Meta } from "@/types";
import axios from "axios";

const baseUrl = getBaseUrl();

export const fetchMetadata = async (url: string) => {
  try {
    const { data } = await axios.get<Meta>(`${baseUrl}/api/extract`, {
      params: { url },
    });
    return data;
  } catch (error) {
    return null;
  }
};
