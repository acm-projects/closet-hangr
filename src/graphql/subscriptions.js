/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
    firstName
    lastName
    sex
    clothing {
      items {
        id
        type
        primaryColor
        secondaryColor
      }
      nextToken
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    username
    firstName
    lastName
    sex
    clothing {
      items {
        id
        type
        primaryColor
        secondaryColor
      }
      nextToken
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    username
    firstName
    lastName
    sex
    clothing {
      items {
        id
        type
        primaryColor
        secondaryColor
      }
      nextToken
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateClothing = `subscription OnCreateClothing {
  onCreateClothing {
    id
    photo {
      id
      clothing {
        id
        type
        primaryColor
        secondaryColor
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
    }
    type
    primaryColor
    secondaryColor
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateClothing = `subscription OnUpdateClothing {
  onUpdateClothing {
    id
    photo {
      id
      clothing {
        id
        type
        primaryColor
        secondaryColor
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
    }
    type
    primaryColor
    secondaryColor
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteClothing = `subscription OnDeleteClothing {
  onDeleteClothing {
    id
    photo {
      id
      clothing {
        id
        type
        primaryColor
        secondaryColor
      }
      bucket
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
    }
    type
    primaryColor
    secondaryColor
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    outfits {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateOutfitClothing = `subscription OnCreateOutfitClothing {
  onCreateOutfitClothing {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    outfit {
      id
      user {
        id
        username
        firstName
        lastName
        sex
      }
      clothing {
        nextToken
      }
    }
  }
}
`;
export const onUpdateOutfitClothing = `subscription OnUpdateOutfitClothing {
  onUpdateOutfitClothing {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    outfit {
      id
      user {
        id
        username
        firstName
        lastName
        sex
      }
      clothing {
        nextToken
      }
    }
  }
}
`;
export const onDeleteOutfitClothing = `subscription OnDeleteOutfitClothing {
  onDeleteOutfitClothing {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    outfit {
      id
      user {
        id
        username
        firstName
        lastName
        sex
      }
      clothing {
        nextToken
      }
    }
  }
}
`;
export const onCreateOutfit = `subscription OnCreateOutfit {
  onCreateOutfit {
    id
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    clothing {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateOutfit = `subscription OnUpdateOutfit {
  onUpdateOutfit {
    id
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    clothing {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteOutfit = `subscription OnDeleteOutfit {
  onDeleteOutfit {
    id
    user {
      id
      username
      firstName
      lastName
      sex
      clothing {
        nextToken
      }
      outfits {
        nextToken
      }
    }
    clothing {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreatePhoto = `subscription OnCreatePhoto {
  onCreatePhoto {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
export const onUpdatePhoto = `subscription OnUpdatePhoto {
  onUpdatePhoto {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
export const onDeletePhoto = `subscription OnDeletePhoto {
  onDeletePhoto {
    id
    clothing {
      id
      photo {
        id
        bucket
      }
      type
      primaryColor
      secondaryColor
      user {
        id
        username
        firstName
        lastName
        sex
      }
      outfits {
        nextToken
      }
    }
    bucket
    fullsize {
      key
      width
      height
    }
    thumbnail {
      key
      width
      height
    }
  }
}
`;
