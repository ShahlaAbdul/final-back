import { ServiceModel } from "../model/servicesModel.js";

export const getAllServices = async (req, res) => {
  try {
    const services = await ServiceModel.find({});
    res.send(services);
  } catch (error) {
    res.send(error.message);
  }
};

export const getServicesById = async (req, res) => {
  try {
    const { id } = req.params;
    const services = await ServiceModel.findById(id);
    res.send(services);
  } catch (error) {
    res.send(error.message);
  }
};

export const createOneServices = async (req, res) => {
  try {
    const { filial, location, hours, call } = req.body;
    const newServices = new ServiceModel({ filial, location, hours, call });
    await newServices.save();
    res.send(newServices);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateServicesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { filial, location, hours, call } = req.body;
    const newServices = await ServiceModel.findByIdAndUpdate(id, {
      filial,
      location,
      hours,
      call,
    });
    res.send(newServices);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteServicesById = async (req, res) => {
  try {
    const { id } = req.params;
    const newServices = ServiceModel.findByIdAndDelete(id);
    res.send(newServices);
  } catch (error) {
    res.send(error.message);
  }
};
