// 数据持久化
// 数据持久化配置
// 设置存储数据
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
// 获取存储数据
export const getStore = (name) => {
  if (!name) return;
  window.localStorage.getItem(name);
};

// 移除存储数据
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
