import {NewsModel} from "../model/newsModel.js"

export const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find({});
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findById(id);
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const createOneNews = async (req, res) => {
  try {
    const { image, head, date, content } = req.body;
    const newNews = new NewsModel({ image, head, date, content });
    await newNews.save();
    res.send(newNews);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, head, date, content } = req.body;
    const newNews = await NewsModel.findByIdAndUpdate(id, {
      image,
      head,
      date,
      content,
    });
    res.send(newNews);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const newNews = NewsModel.findByIdAndDelete(id);
    res.send(newNews);
  } catch (error) {
    res.send(error.message);
  }
};
