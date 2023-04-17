import type { NextApiRequest, NextApiResponse } from "next";
import { items } from "../../common/data";
import { ApiItemsRequest, ApiItemsResponse } from "../../common/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiItemsResponse>
) {
  const params = req.query as unknown as ApiItemsRequest;
  const limit = +(params.limit ?? 10);
  const offset = +(params.offset ?? 0);
  const query = params.query;

  const filtered = items
    .filter((item) =>
      query
        ? item.productName.toLowerCase().includes(query.toLowerCase()) ||
          item.setName.toLowerCase().includes(query.toLowerCase())
        : true
    );
  const filteredAndLimited = filtered.slice(offset, limit + offset);

  res.status(200).json({
    total: filtered.length,
    perPage: limit,
    items: filteredAndLimited,
  });
}
