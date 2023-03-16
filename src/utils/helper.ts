import dayjs from 'dayjs';

const formatDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY');
};

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

const isProductLink = (link: string) => {
  if (!link) {
    return false;
  }

  return link.match(/https:\/\/shopee.vn\/.*-i.\d.*/) || link.match(/https:\/\/shopee.vn\/product\/.*/);
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const numberWithCommas = (number) => {
  if (!number) {
    return 0;
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const priceFormatter = (number) => {
  if (number > 1000) {
    return numberWithCommas((number / 1000).toFixed(0).toString()) + 'k';
  }
  return number.toString();
};

export { formatDate, insertAfter, isProductLink, isEmpty, numberWithCommas, priceFormatter };
