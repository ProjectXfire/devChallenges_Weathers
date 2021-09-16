import axios from "axios";

export const getList = async (path: string) => {
  const { data }: any = await axios.get(path);
  return data;
};

export const getListProxy = async (path: string, proxy: string) => {
  const { data }: any = await axios({
    method: "GET",
    url: `${proxy}/${path}`,
    headers: {
      origin: path,
    },
  });
  return data;
};
