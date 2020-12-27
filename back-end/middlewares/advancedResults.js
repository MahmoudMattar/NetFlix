const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  // copying reqQuery
  let reqQuery = { ...req.query };

  // defining removed fields from search query
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((field) => delete reqQuery[field]);

  // adding $ to mongoose operators
  let queryString = JSON.stringify(reqQuery);
  queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/, (match) => `$${match}`);

  // querying with options
  query = model.find(JSON.parse(queryString));

  // selecting certain fields if select field is available
  if (req.query.select) {
    const selectedFields = req.query.select.split(",").join(" ");
    query.select(selectedFields);
  }

  // sorting
  if (req.query.sort) {
    const sortFields = req.query.sort.split(",").join(" ");
    query.sort(sortFields);
  } else {
    query.sort("-createdAt");
  }

  // pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const documentsCount = await model.countDocuments();
  query.skip(startIndex).limit(limit);
  const pagination = {};
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }
  if (endIndex < documentsCount) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  // if populate
  if (populate) {
    query = query.populate(populate);
  }

  // fetching query
  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    data: results,
    pagination,
  };
  next();
};

module.exports = advancedResults;
