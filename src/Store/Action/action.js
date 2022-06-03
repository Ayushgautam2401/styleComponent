export const TITLE_CHANGED = "TITLE_CHANGED";

  export const setTitleAction = (title) => ({
    type: TITLE_CHANGED,
    payload: {
      title
    }
  })
  