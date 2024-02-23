import { FaqModel } from "../model/faqModel.js"


export const getAllFaqs = async (req, res) => {
    try {
        const faq = await FaqModel.find({})
        res.send(faq)
    } catch (error) {
        res.send(error.message)
    }
}
export const getOneFaqs = async (req, res) => {
    try {
        const { id } = req.params;
    const faq = await FaqModel.findById(id)
    res.send(faq);
  } catch (error) {
    res.send(error.message);
  }
};
export const createOneFaq = async (req, res) => {
  try {
      const { question, answer } = req.body;
      const newFaq = new FaqModel({ question, answer });
      await newFaq.save();
      res.send(newFaq);
  } catch (error) {
    res.send(error.message);
  }
};
export const updateFaqById = async (req, res) => {
    try {
      const { question, answer } = req.body;
        const { id } = req.params;
        const newFaq = await FaqModel.findByIdAndUpdate(id, { question, answer });
        res.send(newFaq);
    } catch (error) {
        res.send(error.message);
    }
};
export const deleteFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const newFaq = await FaqModel.findByIdAndDelete(id);
    res.send(newFaq);
  } catch (error) {
    res.send(error.message);
  }
};
