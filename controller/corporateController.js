import { CorporateModel } from "../model/corporateModel.js";

export const getAllCorporate = async (req, res) => {
  try {
    const corporate = await CorporateModel.find({});
    res.send(corporate);
  } catch (error) {
    res.send(error.message);
  }
};
export const getOneCorporate = async (req, res) => {
  try {
    const { id } = req.params;
    const corporate = await CorporateModel.findById(id);
    res.send(corporate);
  } catch (error) {
    res.send(error.message);
  }
};
export const createOneCorporate = async (req, res) => {
  try {
    const { category, image, head, title } = req.body;
    const newCorporate = new CorporateModel({ category, image, head, title });
    await newCorporate.save();
    res.send(newCorporate);
  } catch (error) {
    res.send(error.message);
  }
};
export const updateCorporateById = async (req, res) => {
  try {
    const { category, image, head, title } = req.body;
    const { id } = req.params;
    const newCorporate = await CorporateModel.findByIdAndUpdate(id, {
      category,
      image,
      head,
      title,
    });
    res.send(newCorporate);
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteCorporateById = async (req, res) => {
  try {
    const { id } = req.params;
    const newCorporate = await CorporateModel.findByIdAndDelete(id);
    res.send(newCorporate);
  } catch (error) {
    res.send(error.message);
  }
};
