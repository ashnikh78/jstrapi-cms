'use strict';

module.exports = {
  attributes: {
    profilePicture: {
      type: 'media',
      multiple: false,
      required: false,
    },
    role: {
      type: 'enumeration',
      enum: ['Admin', 'Editor', 'Viewer'],
      default: 'Viewer',
    },
  },
};
