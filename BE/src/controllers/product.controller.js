import Product from "../models/product";
import slugify from "slugify";

export const addProduct = async (req, res) => {
  try {
    const data = await Product({
      ...req.body,
      slug: slugify(req.body.name, "-"),
    }).save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  const {
    _page = 1,
    _limit = 12,
    _sort = "createAt",
    _order = "asc",
    _expand = true,
  } = req.query;

  const options = {
    page: _page,
    limit: _limit,
    sort: { [_sort]: _order === "desc" ? -1 : 1 },
  };
  // const populateOptions = _expand
  //   ? [{ path: "category", select: "name" }, { path: "attribites" }]
  //   : [];
  try {
    const result = await Product.paginate({}, { ...options });
    console.log(result);

    if (result.docs.length === 0) throw new Error("No products found");

    const data = {
      data: result.docs,
      pagination: {
        currentPage: result.page,
        totalPages: result.totalPages,
        totalItems: result.totalDocs,
      },
    };
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await Product.findOne({ slug: slug });

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  const { slug } = req.params;
  try {
    if (!req.body.name) {
      const product = await Product.findOneAndUpdate({ slug: slug }, req.body, {
        new: true,
      });
    }

    const product = await Product.findOneAndUpdate(
      { slug: slug },
      {
        ...req.body,
        slug: slugify(req.body.name, "-"),
      },
      {
        new: true,
      }
    );

    if (!product.length < 0)
      return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await Product.findOneAndDelete({ slug: slug });

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
