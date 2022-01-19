import Joi from "@hapi/joi";

module.exports = {
  profileValidation: (body) => {
    const profileSchema = Joi.object({
      name: Joi.string(),
      job_title: Joi.string(),
      photo_url: Joi.string(),
    });
    return profileSchema.validate(body);
  },

  memberValidation: (body) => {
    const memberSchema = Joi.object({
      account_id: Joi.number().required(),
    });
    return memberSchema.validate(body);
  },

  searchValidation: (query) => {
    const searchSchema = Joi.object({
      sort_by: Joi.string(),
      page: Joi.number(),
      keyboard: Joi.array().items(Joi.string()),
      location: Joi.array().items(Joi.string()),
      include_relocate: Joi.string(),
      job_title: Joi.array().items(Joi.string()),
      job_type: Joi.array().items(Joi.string()),
      skill: Joi.array().items(Joi.string),
      years_experience: Joi.array().items(Joi.string()),
      min_salary: Joi.number(),
      max_salary: Joi.number(),
      remote: Joi.string(),
      visa: Joi.string(),
      exclude_dealt_with: Joi.string(),
      last_active_value: Joi.number(),
      last_active_type: Joi.string(),
      exclude_skipped: Joi.string(),
      special_page: Joi.number(),
      ui: Joi.string(),
      default: Joi.string(),
    });
    return searchSchema.validate(query);
  },
};
