export const FoodApi = {
  categories: [
    {
      id: 1,
      name: "Bakery",
      svg:  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5417 33.0729H16.6146V44.6354H33.5417V33.0729Z" fill="#A6C44A"></path><path d="M38.0208 10.4167C37.8125 10.4167 37.5521 10.4167 37.3438 10.4688C35.7292 5.26043 30.5208 1.45834 24.3229 1.45834C18.8542 1.45834 14.1146 4.42709 11.9792 8.75001C6.04167 9.37501 1.40625 14.0104 1.40625 19.6875C1.40625 25.7813 6.82292 30.7813 13.4375 30.7813C17.3958 30.7813 20.9375 29.0104 23.125 26.3021C23.4896 26.3542 23.9063 26.3542 24.3229 26.3542C26.0417 26.3542 27.7083 26.0417 29.2708 25.4688C31.1458 28.0729 34.375 29.7917 38.0729 29.7917C43.9063 29.7917 48.6458 25.4688 48.6458 20.1042C48.6458 14.7396 43.8542 10.4167 38.0208 10.4167Z" fill="#FC8019"></path><path d="M13.4895 31.7708C6.24996 31.7708 0.416626 26.3542 0.416626 19.6875C0.416626 13.75 5.10413 8.69791 11.3541 7.76041C13.802 3.28124 18.8541 0.416656 24.3229 0.416656C30.5208 0.416656 36.0416 4.06249 38.0729 9.42707C44.427 9.42707 49.6354 14.2187 49.6354 20.1562C49.6354 26.0417 44.427 30.8854 38.0729 30.8854C34.4791 30.8854 31.0937 29.3229 28.9062 26.7187C27.3958 27.1875 25.8854 27.3958 24.3229 27.3958C24.0625 27.3958 23.802 27.3958 23.5937 27.3958C21.0937 30.1562 17.4479 31.7708 13.4895 31.7708ZM24.3229 2.44791C19.427 2.44791 14.9479 5.10416 12.9166 9.16666L12.6562 9.68749L12.0833 9.73957C6.61454 10.3646 2.44788 14.6354 2.44788 19.6875C2.44788 25.2083 7.39579 29.7396 13.4895 29.7396C17.0312 29.7396 20.2604 28.2292 22.3437 25.625L22.7083 25.2083L23.2291 25.2604C23.5416 25.2604 23.9062 25.3125 24.3229 25.3125C25.8854 25.3125 27.4479 25.0521 28.9062 24.5312L29.6354 24.2708L30.1041 24.8958C31.875 27.3437 34.8437 28.8021 38.0729 28.8021C43.3333 28.8021 47.6041 24.8958 47.6041 20.1562C47.6041 15.4167 43.2812 11.4583 38.0208 11.4583C37.8645 11.4583 37.7083 11.4583 37.552 11.4583L36.6145 11.5104L36.3541 10.7292C34.8437 5.88541 29.8958 2.44791 24.3229 2.44791Z" fill="#3D4152"></path><path d="M37.8125 49.5833H12.1875L7.13538 28.0729L8.95829 28.8542C10.4166 29.4271 11.927 29.7396 13.4895 29.7396C17.0312 29.7396 20.2604 28.2292 22.3437 25.625L22.7083 25.2083L23.2291 25.2604C23.5416 25.2604 23.9062 25.3125 24.3229 25.3125C25.8854 25.3125 27.4479 25.0521 28.9062 24.5313L29.6354 24.2708L30.1041 24.8958C31.875 27.3438 34.8437 28.8021 38.0729 28.8021C39.1666 28.8021 40.2604 28.6458 41.302 28.2813L43.0208 27.7083L37.8125 49.5833ZM13.802 47.5521H36.25L40.2604 30.625C39.5312 30.7292 38.802 30.8333 38.0729 30.8333C34.4791 30.8333 31.0937 29.2708 28.9062 26.6667C27.3958 27.1354 25.8854 27.3438 24.3229 27.3438C24.0625 27.3438 23.802 27.3438 23.5937 27.3438C21.0937 30.1563 17.4479 31.7708 13.4895 31.7708C12.2916 31.7708 11.0937 31.6146 9.99996 31.3542L13.802 47.5521Z" fill="#3D4152"></path><path d="M21.0416 35.2083H19.0104V42.0312H21.0416V35.2083Z" fill="#3D4152"></path><path d="M26.0937 35.2083H24.0625V42.0312H26.0937V35.2083Z" fill="#3D4152"></path><path d="M31.0938 35.2083H29.0625V42.0312H31.0938V35.2083Z" fill="#3D4152"></path><path d="M12.1088 24.8571L10.4757 23.3246L9.08571 24.8058L10.7188 26.3383L12.1088 24.8571Z" fill="#3D4152"></path><path d="M13.7297 15.7257L12.0966 14.1931L10.7066 15.6743L12.3397 17.2069L13.7297 15.7257Z" fill="#3D4152"></path><path d="M39.8665 16.5007L38.2336 14.9679L36.8434 16.4489L38.4763 17.9817L39.8665 16.5007Z" fill="#3D4152"></path><path d="M31.5916 18.5252L29.9585 16.9926L28.5685 18.4738L30.2016 20.0064L31.5916 18.5252Z" fill="#3D4152"></path><path d="M42.2828 24.0549L40.6497 22.5223L39.2597 24.0035L40.8928 25.5361L42.2828 24.0549Z" fill="#3D4152"></path><path d="M21.5555 20.0502L19.9224 18.5176L18.5324 19.9988L20.1655 21.5313L21.5555 20.0502Z" fill="#3D4152"></path><path d="M23.0601 11.1296L21.427 9.59708L20.037 11.0783L21.6701 12.6108L23.0601 11.1296Z" fill="#3D4152"></path><path d="M30.8003 8.65548L29.1672 7.12292L27.7772 8.6041L29.4103 10.1367L30.8003 8.65548Z" fill="#3D4152"></path></svg>,
    },
    {
      id: 2,
      name: "Burger",
      svg: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.7396 22.2396H0.260376V21.1979C0.260376 11.8229 10.8333 1.30209 25 1.30209C39.1666 1.30209 49.7396 11.8229 49.7396 21.1979V22.2396ZM2.39579 20.1563H47.6562C46.875 12.0313 37.4479 3.33334 25 3.33334C12.552 3.33334 3.12496 12.0313 2.39579 20.1563Z" fill="#3D4152"></path><path d="M8.12504 16.0417C11.0417 11.4583 17.5 7.5 25 7.5C32.5 7.5 38.9063 11.4583 41.875 16.0417H8.12504ZM46.7188 47.6563H3.28129C2.18754 47.6563 1.30212 46.7708 1.30212 45.6771V39.0104H48.698V45.6771C48.698 46.7708 47.8125 47.6563 46.7188 47.6563Z" fill="#A6C44A"></path><path d="M46.7187 48.6979H3.28121C1.61454 48.6979 0.260376 47.3437 0.260376 45.6771V38.0208H49.7396V45.7291C49.7396 47.3437 48.3854 48.6979 46.7187 48.6979ZM2.34371 40.0521V45.6771C2.34371 46.1979 2.76038 46.6146 3.28121 46.6146H46.7708C47.2916 46.6146 47.7083 46.1979 47.7083 45.6771V40.0521H2.34371Z" fill="#3D4152"></path><path d="M44.2188 34.5312H5.78129C3.28129 34.5312 1.30212 32.5 1.30212 30.0521C1.30212 27.5521 3.33337 25.5729 5.78129 25.5729H44.2188C46.7188 25.5729 48.698 27.6042 48.698 30.0521C48.698 32.5521 46.7188 34.5312 44.2188 34.5312Z" fill="#FC8019"></path><path d="M44.2187 35.5729H5.78121C2.70829 35.5729 0.260376 33.0729 0.260376 30.0521C0.260376 27.0313 2.76038 24.5312 5.78121 24.5312H44.2187C47.2916 24.5312 49.7396 27.0313 49.7396 30.0521C49.7396 33.0729 47.2396 35.5729 44.2187 35.5729ZM5.78121 26.5625C3.85413 26.5625 2.29163 28.125 2.29163 30.0521C2.29163 31.9792 3.85413 33.5417 5.78121 33.5417H44.2187C46.1458 33.5417 47.7083 31.9792 47.7083 30.0521C47.7083 28.125 46.1458 26.5625 44.2187 26.5625H5.78121Z" fill="#FC8019"></path><path d="M27.5 31.9792C26.5104 31.9792 25.625 31.6146 24.7917 31.3021C24.1146 31.0417 23.4896 30.7813 22.9167 30.7813C22.2396 30.7292 21.4583 30.9896 20.6771 31.1979C19.4792 31.5625 18.125 31.9792 16.7708 31.5104C16.3542 31.3542 15.9896 31.1458 15.6771 30.9896C15.4687 30.8854 15.2604 30.7292 15.0521 30.6771C14.0625 30.2604 12.8646 30.5208 11.5625 30.8333L11.1979 30.9375C9.6875 31.25 7.5 31.5625 5.9375 30.2083L7.29167 28.6458C7.96875 29.2188 9.0625 29.3229 10.7812 28.9583L11.1458 28.8542C12.6042 28.5417 14.2708 28.1771 15.8854 28.8021C16.1979 28.9583 16.4583 29.1146 16.7708 29.2188C17.0312 29.375 17.2917 29.5313 17.5 29.5833C18.2292 29.8438 19.1146 29.5833 20.1562 29.2708C21.0937 29.0104 22.0312 28.6979 23.125 28.75C24.0625 28.8021 24.8437 29.1146 25.625 29.4271C26.4583 29.7396 27.2396 30.0521 27.9167 29.9479C28.1771 29.8958 28.4896 29.7917 28.8542 29.6354C29.0104 29.5833 29.1146 29.5313 29.2708 29.4792C30.8333 28.8542 32.6562 28.6979 34.3229 29.0625C34.5833 29.1146 34.8958 29.1667 35.1562 29.2708C35.6771 29.4271 36.1979 29.5313 36.6667 29.5313C37.3437 29.5313 38.0729 29.2188 38.8021 28.9583C39.1146 28.8542 39.4271 28.6979 39.7396 28.5938C41.5104 27.9688 43.0729 28.125 44.1146 29.0104L42.7604 30.5729C42.0833 30 40.8854 30.3646 40.3646 30.5208C40.1042 30.625 39.7917 30.7292 39.5312 30.8333C38.6458 31.1979 37.7083 31.5625 36.6146 31.5625C36.6146 31.5625 36.6146 31.5625 36.5625 31.5625C35.8333 31.5625 35.1562 31.4063 34.5312 31.25C34.2708 31.1979 34.0625 31.1458 33.8021 31.0938C32.5 30.8333 31.1458 30.9375 29.9479 31.4063C29.8437 31.4583 29.6875 31.5104 29.5833 31.5625C29.1667 31.7188 28.75 31.9271 28.2292 31.9792C27.9687 31.9271 27.7604 31.9792 27.5 31.9792Z" fill="#3D4152"></path><path d="M8.14084 16.5725L6.9325 14.8754L5.36267 15.9931L6.57102 17.6903L8.14084 16.5725Z" fill="#3D4152"></path><path d="M35.7987 10.161L34.5901 8.46405L33.0204 9.58199L34.229 11.2789L35.7987 10.161Z" fill="#3D4152"></path><path d="M30.8066 8.06964L29.5983 6.37253L28.0284 7.49025L29.2368 9.18736L30.8066 8.06964Z" fill="#3D4152"></path><path d="M12.0382 12.6452L10.6487 11.0929L9.71733 11.9266L11.1069 13.4789L12.0382 12.6452Z" fill="#3D4152"></path><path d="M18.7691 9.29224L17.9674 7.36932L16.4771 7.99061L17.2788 9.91353L18.7691 9.29224Z" fill="#3D4152"></path><path d="M13.8011 17.4814L12.9171 15.5949L11.8324 16.1032L12.7163 17.9897L13.8011 17.4814Z" fill="#3D4152"></path><path d="M23.8021 8.22916L22.5 6.61457C23.125 6.09374 23.9063 5.72916 24.6875 5.57291L25.1563 7.55207C24.6355 7.70832 24.1667 7.91666 23.8021 8.22916ZM15.8855 14.3229L15.3646 12.3437C15.8334 12.2396 16.3021 12.0312 16.7188 11.8229L17.6563 13.6458C17.0834 13.9062 16.5105 14.1146 15.8855 14.3229Z" fill="#3D4152"></path><path d="M27.5591 17.1271L26.897 15.1518L25.1686 15.7312L25.8307 17.7065L27.5591 17.1271Z" fill="#3D4152"></path><path d="M38.0465 17.7757L37.3844 15.8004L35.656 16.3797L36.3181 18.3551L38.0465 17.7757Z" fill="#3D4152"></path><path d="M31.823 18.1771L30.9896 16.3021C31.5105 16.0938 32.0313 15.8854 32.5521 15.7813L32.9688 17.8125C32.5521 17.9167 32.1355 18.0208 31.823 18.1771ZM29.1667 14.1667L28.3334 12.2917C28.8542 12.0833 29.375 11.9271 29.8959 11.7708L30.3125 13.8021C29.8959 13.8542 29.5313 14.0104 29.1667 14.1667Z" fill="#3D4152"></path><path d="M24.0456 12.8497L23.3812 10.8752L22.1965 11.2738L22.8608 13.2484L24.0456 12.8497Z" fill="#3D4152"></path><path d="M14.3077 10.3037L13.6425 8.32947L12.4579 8.72862L13.1232 10.7029L14.3077 10.3037Z" fill="#3D4152"></path><path d="M21.4415 17.8644L20.7762 15.8901L19.5917 16.2893L20.2569 18.2635L21.4415 17.8644Z" fill="#3D4152"></path><path d="M42.9686 16.3L42.3042 14.3254L41.1195 14.7241L41.7838 16.6986L42.9686 16.3Z" fill="#3D4152"></path><path d="M39.2227 14.0316L38.5583 12.057L37.3736 12.4557L38.038 14.4302L39.2227 14.0316Z" fill="#3D4152"></path></svg>
    },
    {
      id: 3,
      name: "Beverage",
      svg:<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2605 44.1667C9.73963 43.6979 9.21879 43.125 8.75004 42.6042L10.3125 41.25C10.7292 41.7188 11.198 42.2396 11.6667 42.6563L10.2605 44.1667ZM6.82296 40C6.45837 39.375 6.09379 38.75 5.72921 38.125L7.55212 37.1875C7.86462 37.7604 8.17712 38.3333 8.54171 38.9063L6.82296 40ZM4.53129 35.1042C4.32296 34.4271 4.11462 33.6979 3.95837 33.0208L5.98962 32.6042C6.14587 33.2292 6.30212 33.8542 6.51046 34.4792L4.53129 35.1042ZM3.54171 29.7917C3.48962 29.3229 3.48962 28.9063 3.48962 28.4375C3.48962 28.1771 3.48962 27.9167 3.48962 27.6042L5.57296 27.7083C5.57296 27.9688 5.57296 28.1771 5.57296 28.4375C5.57296 28.8542 5.57296 29.2708 5.62504 29.6354L3.54171 29.7917ZM5.88546 24.7917L3.85421 24.4271C4.01046 23.6979 4.16671 23.0208 4.37504 22.3438L6.35421 22.9167C6.14587 23.5417 5.98962 24.1667 5.88546 24.7917ZM7.39587 20.1563L5.52087 19.2708C5.83337 18.6458 6.14587 17.9688 6.56254 17.3438L8.33338 18.3854C7.96879 19.0104 7.65629 19.5833 7.39587 20.1563ZM40.5209 43.3854L39.0625 41.9271C39.5313 41.4583 39.948 40.9375 40.3646 40.4688L41.9792 41.7188C41.5105 42.2917 41.0417 42.8646 40.5209 43.3854ZM43.75 39.0104L41.9792 38.0208C42.2917 37.4479 42.6042 36.875 42.8646 36.25L44.7396 37.0833C44.4271 37.7604 44.1146 38.3854 43.75 39.0104ZM45.7813 34.0625L43.8021 33.5417C43.9584 32.9167 44.1146 32.2917 44.2188 31.6146L46.2501 31.9271C46.1459 32.6042 45.9896 33.3333 45.7813 34.0625ZM46.5105 28.6979H44.4271V28.4896C44.4271 27.9167 44.375 27.2917 44.323 26.7188L46.3542 26.5104C46.4063 27.1354 46.4584 27.8125 46.4584 28.4375L46.5105 28.6979ZM43.9063 23.8021C43.7501 23.1771 43.5417 22.5521 43.3334 21.9271L45.2605 21.25C45.5209 21.9271 45.7292 22.6042 45.8855 23.3333L43.9063 23.8021ZM42.1355 19.2708C41.823 18.6979 41.5105 18.125 41.1459 17.6042L42.8646 16.4583C43.2813 17.0313 43.6459 17.6563 44.0105 18.3333L42.1355 19.2708Z" fill="#3D4152"></path><path d="M11.5105 1.30209H38.4896L41.9792 8.22918H8.02087L11.5105 1.30209Z" fill="#A6C44A"></path><path d="M43.6979 9.27082H6.35413L10.8854 0.260406H39.1666L43.6979 9.27082ZM9.68746 7.18749H40.3645L37.9166 2.29166H12.1875L9.68746 7.18749Z" fill="#3D4152"></path><path d="M15 48.6979H35L36.25 38.8542H13.75L15 48.6979Z" fill="white"></path><path d="M35.9375 49.7396H14.0625L12.6041 37.8125H37.4479L35.9375 49.7396ZM15.8854 47.6563H34.1145L35.1041 39.8438H14.8958L15.8854 47.6563Z" fill="#3D4152"></path><path d="M40.052 8.22919H9.94788L11.1458 18.0729H38.8541L40.052 8.22919Z" fill="white"></path><path d="M39.7396 19.1146H10.2605L8.80212 7.1875H41.25L39.7396 19.1146ZM12.0834 17.0313H37.9167L38.9063 9.21875H11.0938L12.0834 17.0313Z" fill="#3D4152"></path><path d="M11.1459 18.0729L13.75 38.8542H36.25L38.8542 18.0729H11.1459Z" fill="#FC8019"></path><path d="M37.1354 39.8958H12.8646L10 17.0833H40L37.1354 39.8958ZM14.6354 37.8125H35.3125L37.6563 19.1146H12.3437L14.6354 37.8125Z" fill="#FC8019"></path><path d="M25 35.5729C28.1353 35.5729 30.677 32.4016 30.677 28.4896C30.677 24.5776 28.1353 21.4062 25 21.4062C21.8646 21.4062 19.3229 24.5776 19.3229 28.4896C19.3229 32.4016 21.8646 35.5729 25 35.5729Z" fill="white"></path><path d="M25 36.5625C21.3021 36.5625 18.2812 32.9167 18.2812 28.4375C18.2812 23.9583 21.3021 20.3646 25 20.3646C28.6979 20.3646 31.7188 24.0104 31.7188 28.4896C31.7188 32.9688 28.6979 36.5625 25 36.5625ZM25 22.3958C22.4479 22.3958 20.3646 25.1042 20.3646 28.4375C20.3646 31.7708 22.4479 34.4792 25 34.4792C27.5521 34.4792 29.6354 31.7708 29.6354 28.4375C29.6354 25.1042 27.5521 22.3958 25 22.3958Z" fill="#3D4152"></path><path d="M24.5313 35.7812C23.9584 34.3229 23.9063 32.7604 24.3229 31.25C24.4271 30.8854 24.5834 30.5208 24.6875 30.2083C24.8438 29.7396 25 29.3229 25.1042 28.9583C25.2084 28.2812 25.1042 27.5 24.7917 26.7187C24.4792 25.9375 23.9584 25.1562 23.4375 24.4271C23.125 24.0104 22.8646 23.5417 22.6563 23.0208C22.3959 22.2917 22.3438 21.5625 22.6042 20.9375L24.5313 21.7187C24.4792 21.875 24.4792 22.0833 24.5834 22.2917C24.6875 22.6042 24.8959 22.9167 25.1563 23.2292C25.7292 24.0625 26.3021 24.9479 26.7188 25.9375C27.1875 27.0833 27.3438 28.2812 27.1875 29.3229C27.0834 29.9479 26.875 30.4687 26.6667 30.9896C26.5625 31.3021 26.4584 31.5625 26.3542 31.875C26.0417 32.9167 26.0938 34.0625 26.5104 35.0521L24.5313 35.7812Z" fill="#3D4152"></path></svg>
    },
    {
      id: 4,
      name: "Chiken",
      svg: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8646 49.2187C8.90625 49.2187 4.94791 47.8125 2.5 44.6354C0.364579 41.875 -0.260421 38.1771 0.624996 34.1667C1.45833 30.5208 3.54166 27.0833 6.25 25.0521C10.6771 21.6667 31.3021 11.3542 36.7708 18.4896C39.1146 21.6146 37.9687 26.875 33.4375 33.6979C29.8958 39.0104 25.1042 44.1146 22.3958 46.1458C19.8437 48.125 16.3542 49.2187 12.8646 49.2187ZM30.3646 18.0208C23.2812 18.0208 11.5104 23.6458 7.5 26.6667C5.20833 28.4375 3.38541 31.4062 2.65625 34.5833C1.875 37.9687 2.44791 41.0937 4.16666 43.3854C7.96875 48.3333 16.5104 48.0729 21.1458 44.5833C23.75 42.6042 28.4375 37.5521 31.7187 32.6042C35.6771 26.6146 36.875 22.0833 35.1042 19.7396C34.1667 18.5417 32.4479 18.0208 30.3646 18.0208Z" fill="#3D4152"></path><path d="M12.9166 44.0625C10.1562 44.0625 7.86451 43.125 6.61451 41.5104C5.46868 40 5.1041 37.7083 5.67701 35.3125C6.19785 32.8125 7.6041 30.4688 9.37493 29.1667C13.0728 26.3542 24.1666 21.1458 30.3645 21.1458C31.9791 21.1458 32.6041 21.5104 32.7083 21.6146C33.0208 21.9792 33.2812 24.6875 29.1666 30.8854C25.7291 35.9896 21.1978 40.625 19.2187 42.1354C17.6562 43.3333 15.2603 44.0625 12.9166 44.0625Z" fill="#FC8019"></path><path d="M47.9688 14.5833C47.5521 14.0104 47.0313 13.5938 46.4584 13.2813C45.3646 12.7083 44.5313 11.6667 44.323 10.4688C44.1667 9.84375 43.9063 9.21875 43.4896 8.69792C42.1875 7.08334 39.5313 6.71875 37.8125 7.91667C35.8855 9.27084 35.4688 11.9792 36.875 13.8542C37.2396 14.3229 37.1875 15 36.7188 15.3125L33.8021 17.5521C34.6355 17.9167 35.3646 18.3854 35.8855 19.1146C36.4063 19.7917 36.7188 20.625 36.823 21.5104L39.7396 19.2708C40.2084 18.9063 40.8334 19.0104 41.198 19.4792C42.6563 21.3542 45.3646 21.6667 47.1875 20.1563C48.8542 18.9063 49.1667 16.25 47.9688 14.5833Z" fill="#A6C44A"></path><path d="M36.0417 23.4375L35.8334 21.6667C35.7292 20.8854 35.5209 20.2604 35.1042 19.7396C34.6875 19.2188 34.1667 18.8021 33.4375 18.5417L31.7709 17.8646L36.1459 14.5313L36.0938 14.4792C35.2084 13.3333 34.8438 11.9271 35.1042 10.5208C35.3125 9.11459 36.0938 7.86459 37.2396 7.03126C39.375 5.52084 42.6042 5.93751 44.2709 8.02084C44.7917 8.69792 45.1563 9.42709 45.3125 10.2083C45.5209 11.1458 46.0938 11.9271 46.9271 12.3438C47.6563 12.7083 48.2813 13.2813 48.8021 13.9583C50.3646 16.0938 49.8959 19.3229 47.8646 20.9896C46.7709 21.9271 45.3646 22.2917 43.9584 22.1354C42.5521 21.9792 41.3021 21.25 40.4167 20.1042L40.3646 20.0521L36.0417 23.4375ZM40.3646 18.0729C40.4688 18.0729 40.573 18.0729 40.625 18.0729C41.198 18.125 41.6667 18.4375 42.0313 18.9063C42.5521 19.5833 43.3334 20.0521 44.1667 20.1563C45.0521 20.2604 45.8855 20 46.5625 19.4271C47.7605 18.4375 48.0209 16.4063 47.1355 15.1563C46.823 14.7396 46.4584 14.4271 46.0417 14.1667C44.6355 13.4375 43.6459 12.1875 43.3334 10.625C43.2292 10.1563 43.0209 9.68751 42.7084 9.27084C41.7188 8.07292 39.6875 7.81251 38.4375 8.69792C37.7084 9.21876 37.2396 9.94792 37.1355 10.7813C36.9792 11.6146 37.2396 12.5 37.7605 13.1771C38.125 13.6458 38.2813 14.1667 38.1771 14.7396C38.125 15.2604 37.8125 15.7813 37.3959 16.0938L35.7292 17.3958C36.1459 17.7083 36.4584 18.0208 36.7709 18.4375C37.0834 18.8542 37.2917 19.2708 37.5 19.7396L39.1667 18.4375C39.5313 18.2292 39.948 18.0729 40.3646 18.0729Z" fill="#3D4152"></path><path d="M7.05716 32.7157L5.56018 32.5147L5.28284 34.5795L6.77982 34.7805L7.05716 32.7157Z" fill="#3D4152"></path><path d="M18.2008 33.0269L16.7039 32.8258L16.4265 34.8906L17.9235 35.0917L18.2008 33.0269Z" fill="#3D4152"></path><path d="M28.3617 30.6803L26.8647 30.4792L26.5874 32.544L28.0844 32.745L28.3617 30.6803Z" fill="#3D4152"></path><path d="M13.3053 42.451L11.8083 42.2499L11.531 44.3147L13.028 44.5158L13.3053 42.451Z" fill="#3D4152"></path><path d="M16.898 27.0875L15.401 26.8865L15.1237 28.9513L16.6206 29.1523L16.898 27.0875Z" fill="#3D4152"></path><path d="M27.4235 22.1383L25.9265 21.9373L25.6492 24.002L27.1462 24.2031L27.4235 22.1383Z" fill="#3D4152"></path><path d="M13.9583 0.78125H11.875V7.23958H13.9583V0.78125Z" fill="#3D4152"></path><path d="M7.81246 9.79166H5.72913V16.25H7.81246V9.79166Z" fill="#3D4152"></path><path d="M20.1563 7.76041H18.073V14.2187H20.1563V7.76041Z" fill="#3D4152"></path></svg>
    },
    {
      id: 5,
      name: "Pizza",
      svg:  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3333 43.5937C20 47.2396 10.2604 43.4375 6.61457 35.1042C2.96874 26.7708 6.77082 17.0312 15.1042 13.3854C19.2708 11.5625 23.8021 11.6146 27.7083 13.125L29.4271 8.69791C24.375 6.71875 18.5417 6.66666 13.1771 9.01041C2.4479 13.6979 -2.44793 26.25 2.23957 36.9792C6.92707 47.7083 19.4792 52.6042 30.2083 47.9167C40.9375 43.2292 45.8333 30.6771 41.1458 19.9479L36.8229 21.875C40.4687 30.2083 36.6667 39.9479 28.3333 43.5937Z" fill="#FC8019"></path><path d="M34.6875 6.04168C38.6458 7.55209 41.9792 10.625 43.8021 14.7917L48.125 12.8646C45.7813 7.50001 41.5104 3.59376 36.4063 1.61459L34.6875 6.04168Z" fill="#A6C44A"></path><path d="M43.2812 16.1458L42.8646 15.2083C41.1979 11.4062 38.1771 8.54165 34.3229 7.03124L33.3333 6.61457L35.8333 0.260406L36.8229 0.62499C42.3437 2.81249 46.7187 6.97915 49.1146 12.4479L49.5312 13.3854L43.2812 16.1458ZM36.0416 5.46874C39.6354 7.1354 42.5 9.89582 44.3229 13.4375L46.7708 12.3958C44.6875 8.22915 41.3021 4.94791 37.0312 3.02082L36.0416 5.46874Z" fill="#3D4152"></path><path d="M43.8021 14.7917C41.9792 10.625 38.6459 7.60416 34.6875 6.04166L28.6979 21.4062L43.8021 14.7917Z" fill="#FC8019"></path><path d="M26.8229 23.3854L34.1146 4.6875L35.1042 5.05208C39.4792 6.77083 42.9167 10.0521 44.7917 14.375L45.2084 15.3125L26.8229 23.3854ZM35.2604 7.39583L30.5729 19.4271L42.3959 14.2708C40.8334 11.25 38.3334 8.85417 35.2604 7.39583Z" fill="#3D4152"></path><path d="M21.7188 46.0417C14.9479 46.0417 8.4896 42.1354 5.62501 35.5208C1.71876 26.6666 5.78126 16.3021 14.6354 12.3958C18.9063 10.5208 23.6979 10.4167 28.0729 12.1354L29.0625 12.5L23.5938 26.5104L37.3438 20.4687L37.7604 21.4062C39.6354 25.6771 39.7396 30.4687 38.0209 34.8437C36.3021 39.2187 33.0209 42.6562 28.6979 44.5312C26.4583 45.5729 24.1146 46.0417 21.7188 46.0417ZM7.5521 34.6875C10.9896 42.5 20.1042 46.0416 27.9167 42.6562C31.7188 40.9896 34.5834 37.9687 36.0938 34.1146C37.4479 30.5729 37.5 26.7708 36.25 23.2812L19.8438 30.4687L26.3542 13.75C22.8125 12.6042 18.9583 12.8125 15.5208 14.3229C7.70835 17.7604 4.16668 26.875 7.5521 34.6875Z" fill="#3D4152"></path><path d="M15.9896 39.7396C17.4278 39.7396 18.5938 38.5737 18.5938 37.1354C18.5938 35.6972 17.4278 34.5312 15.9896 34.5312C14.5514 34.5312 13.3854 35.6972 13.3854 37.1354C13.3854 38.5737 14.5514 39.7396 15.9896 39.7396Z" fill="#A6C44A"></path><path d="M15.9895 40.7813C14.5833 40.7813 13.2291 39.9479 12.6041 38.5937C12.1875 37.7083 12.1875 36.7187 12.552 35.7812C12.9166 34.8437 13.5937 34.1667 14.4791 33.75C15.3645 33.3333 16.3541 33.3333 17.2916 33.6979C18.2291 34.0625 18.9062 34.7396 19.3229 35.625C19.7395 36.5104 19.7395 37.5 19.375 38.4375C19.0104 39.375 18.3333 40.0521 17.4479 40.4687C16.9791 40.6771 16.4583 40.7813 15.9895 40.7813ZM15.9895 35.5208C15.7812 35.5208 15.5729 35.5729 15.3645 35.6771C15 35.8333 14.6875 36.1458 14.5312 36.5625C14.375 36.9792 14.375 37.3958 14.5312 37.7604C14.8958 38.5417 15.8333 38.9062 16.6145 38.5937C16.9791 38.4375 17.2916 38.125 17.4479 37.7083C17.6041 37.2917 17.6041 36.875 17.4479 36.5104C17.2916 36.1458 16.9791 35.8333 16.5625 35.6771C16.3541 35.5729 16.1458 35.5208 15.9895 35.5208Z" fill="#A6C44A"></path><path d="M14.2709 23.3333C15.5365 23.3333 16.5625 22.3073 16.5625 21.0417C16.5625 19.776 15.5365 18.75 14.2709 18.75C13.0052 18.75 11.9792 19.776 11.9792 21.0417C11.9792 22.3073 13.0052 23.3333 14.2709 23.3333Z" fill="#A6C44A"></path><path d="M14.2708 24.375C13.8542 24.375 13.4375 24.3229 13.0729 24.1667C12.2396 23.8542 11.6146 23.2292 11.25 22.3958C10.8854 21.5625 10.8854 20.6771 11.1979 19.8438C11.5104 19.0104 12.1354 18.3854 12.9687 18.0208C14.6354 17.2917 16.6146 18.0729 17.3437 19.7396C18.0729 21.4063 17.2917 23.3854 15.625 24.1146C15.2083 24.2708 14.7396 24.375 14.2708 24.375ZM14.2708 19.8438C14.1146 19.8438 13.9583 19.8958 13.8021 19.9479C13.4896 20.1042 13.2812 20.3125 13.125 20.625C13.0208 20.9375 13.0208 21.25 13.125 21.5625C13.2292 21.875 13.4896 22.0833 13.8021 22.2396C14.1146 22.3438 14.4271 22.3438 14.7396 22.2396C15.3646 21.9792 15.625 21.25 15.3646 20.625C15.2083 20.1042 14.7396 19.8438 14.2708 19.8438Z" fill="#A6C44A"></path><path d="M29.4271 39.1667C29.0104 39.1667 28.6458 39.1146 28.2292 38.9583C27.3958 38.6458 26.7708 38.0208 26.4062 37.2396L28.3333 36.4063C28.4375 36.7188 28.6979 36.9271 28.9583 37.0313C29.2708 37.1354 29.5833 37.1354 29.8438 37.0313C30.4167 36.7708 30.7292 36.0938 30.4688 35.4688L32.3958 34.6354C33.125 36.3021 32.3438 38.2292 30.7292 38.9583C30.3125 39.1146 29.8958 39.1667 29.4271 39.1667ZM36.1979 15.7292C34.9479 15.7292 33.75 15 33.1771 13.75L35.1042 12.9167C35.3646 13.4896 36.0417 13.8021 36.6667 13.5417C37.2396 13.2813 37.5521 12.6042 37.2917 11.9792L39.2188 11.1458C39.9479 12.8125 39.1667 14.7396 37.5521 15.4688C37.0833 15.6771 36.6667 15.7292 36.1979 15.7292Z" fill="#3D4152"></path><path d="M9.70388 29.8397L7.63013 29.6406L7.48081 31.1959L9.55456 31.395L9.70388 29.8397Z" fill="#3D4152"></path><path d="M12.0833 34.1146L10.0521 33.6979C10.1562 33.125 10.4166 32.5521 10.7812 32.0833L12.4479 33.3333C12.2396 33.5937 12.1354 33.8542 12.0833 34.1146ZM14.6875 29.5312L12.9687 28.3333C13.2291 27.9167 13.5937 27.6042 14.0104 27.2917L15.2083 29.0104C15 29.1146 14.8437 29.3229 14.6875 29.5312Z" fill="#3D4152"></path><path d="M20.6437 23.9917L18.7612 23.0992L18.2926 24.0875L20.1751 24.98L20.6437 23.9917Z" fill="#3D4152"></path><path d="M37.5399 9.7654L35.6562 8.87543L35.189 9.86436L37.0726 10.7543L37.5399 9.7654Z" fill="#3D4152"></path><path d="M23.2292 18.5417L21.1458 18.1771C21.25 17.6562 21.4583 17.1354 21.7708 16.7187L23.4896 17.9167C23.3333 18.0729 23.2812 18.3333 23.2292 18.5417ZM19.4271 17.1354L17.3958 16.5625C17.5521 16.0417 17.8125 15.5208 18.2292 15.1042L19.7396 16.5625C19.6354 16.7187 19.4792 16.9271 19.4271 17.1354ZM8.43749 24.8437C8.22916 24.2708 8.22916 23.6458 8.54166 23.0729L10.4167 24.0625L8.43749 24.8437Z" fill="#3D4152"></path><path d="M21.0815 33.8223L20.2463 31.9137L19.4351 32.2687L20.2703 34.1772L21.0815 33.8223Z" fill="#3D4152"></path><path d="M23.3484 37.8959L22.5113 35.9881L21.7005 36.3439L22.5376 38.2517L23.3484 37.8959Z" fill="#3D4152"></path><path d="M22.2532 41.8217L21.8372 39.7803L20.5614 40.0404L20.9774 42.0817L22.2532 41.8217Z" fill="#3D4152"></path><path d="M28.0084 41.1457L26.8884 39.3891L25.4392 40.3131L26.5592 42.0697L28.0084 41.1457Z" fill="#3D4152"></path><path d="M23.9062 33.8021C23.9062 33.0729 24.2187 32.3959 24.7917 31.9792L26.0937 33.6459C26.0417 33.6459 26.0417 33.6979 26.0417 33.75L23.9062 33.8021Z" fill="#3D4152"></path><path d="M29.4826 28.8412L28.3087 27.1201L27.233 27.8538L28.4069 29.5749L29.4826 28.8412Z" fill="#3D4152"></path><path d="M30.3646 33.5417L29.7917 31.5104C29.9479 31.4583 30.1563 31.3542 30.2604 31.25L31.6146 32.8646C31.25 33.1771 30.8334 33.3854 30.3646 33.5417Z" fill="#3D4152"></path><path d="M35.2013 28.177L33.6899 26.7432L32.507 27.9901L34.0184 29.4239L35.2013 28.177Z" fill="#3D4152"></path><path d="M18.4758 29.8661L16.6481 28.8662L16.2981 29.5059L18.1258 30.5058L18.4758 29.8661Z" fill="#3D4152"></path><path d="M34.475 16.5408L32.6477 15.5402L32.2975 16.1797L34.1248 17.1804L34.475 16.5408Z" fill="#3D4152"></path></svg>,
      
    },
  ],
  foods: [
    {
      id: 1,
      category_id: 1,
      name: "Scrambled eggs",
      description:
        "Scrambled eggs are a quick and easy breakfast option that is packed with protein.",
      ingredients: ["Eggs", "Milk", "Salt", "Pepper"],
      instructions:
        "1. Whisk together the eggs, milk, salt, and pepper in a bowl. 2. Heat a small amount of oil in a pan over medium heat. 3. Add the egg mixture to the pan and cook, stirring constantly, until the eggs are scrambled and cooked through.",
      image: "https://www.recipegirl.com/wp-content/uploads/2007/06/Creamy-Scrambled-Eggs-1.jpeg",
      offer:'Exclusive',
      price:'12',
      rating:''
    },
    {
      id: 2,
      category_id: 2,
      name: "Grilled cheese sandwich",
      description:
        "A grilled cheese sandwich is a classic lunch or comfort food that is easy to make and always delicious.",
      ingredients: ["Bread", "Cheese", "Butter"],
      instructions:
        "1. Spread butter on one side of each slice of bread. 2. Place one slice of bread, butter-side down, in a pan over medium heat. 3. Top with cheese and the other slice of bread, butter-side up. 4. Cook until the bread is golden brown and the cheese is melted and gooey.",
      image: "https://www.walderwellness.com/wp-content/uploads/2019/10/Gourmet-Grilled-Cheese-Sandwich-Walder-Wellness-5-500x500.jpg",
      offer:'15% off',
      price:'25',
      rating:''
    },
    {
      id: 3,
      category_id: 4,
      name: "Chicken stir-fry",
      description:
        "A chicken stir-fry is a healthy and flavorful dinner option that is quick and easy to make.",
      ingredients: [
        "Chicken breast",
        "Vegetables (such as broccoli, carrots, and onions)",
        "Stir-fry sauce",
      ],
      instructions:
        "1. Cut the chicken breast into bite-sized pieces. 2. Heat a tablespoon of oil in a large pan or wok over medium-high heat. 3. Add the chicken and cook until browned on all sides. 4. Add the vegetables and stir-fry sauce to the pan and cook until the vegetables are tender and the chicken is cooked through.",
      image: "https://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/2273/retina_hungry-girl-healthy-chinese-chicken-stir-fry-recipe-20180312-1828-2342-2417.jpg",
      offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 4,
      category_id: 4,
      name: "Fresh fruit salad",
      description:
        "A fresh fruit salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite fruits (such as apples, bananas, oranges, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://www.eatingwell.com/thmb/sIf2Z1oNy9UjunVXOCBG5tHAav4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4518422-8b9bac307f7a4d7fb4379b8c647b806d.jpg",
      offer:'5% off',
      price:'10',
      rating:''
    },
    {
      id: 5,
      category_id: 2,
      name: "Fish burger",
      description:
        "A fresh fruit salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
      offer:'35% off',
      price:'40',
      rating:''
    },
    {
      id: 6,
      category_id: 2,
      name: "Cheese burger",
      description:
        "A fresh fruit salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.b5b23dc087a14533c898.jpg",
      offer:'15% off',
      price:'20',
      rating:''
    },
    {
      id: 7,
      category_id: 2,
      name: "Pizza burger",
      description:
        "A fresh Cheese salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://freepngimg.com/thumb/bacon/67330-king-hamburger-cheeseburger-sushi-bacon-burger-pizza.png",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 8,
      category_id: 2,
      name: "Potato burger",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.2ba95f1209e7d36d8035.jpg",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 9,
      category_id: 4,
      name: "Japan Ramen",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.82ac7203e6fb77a5beb0.jpg",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 10,
      category_id: 5,
      name: "Pepparoni Pizza",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.0a21631e6947499af364.jpg",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 11,
      category_id: 4,
      name: "Pepparoni Pizza",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.5974ee910592f4765950.jpg",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 12,
      category_id: 4,
      name: "Vegan Pizza",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.eb9c849c19c8bea88330.jpg",
        offer:'25% off',
      price:'30',
      rating:''
    },
    {
      id: 13,
      category_id: 4,
      name: "Vegan Pasta",
      description:
        "A fresh Potato salad is a healthy and refreshing snack that is perfect for any time of day.",
      ingredients: [
        "Your favorite food (such as chees, egg, fish, and berries)",
      ],
      instructions:
        "1. Wash and dice your favorite fruits. 2. Combine the fruits in a bowl and enjoy.",
      image: "https://www.freepnglogos.com/uploads/pasta-png/pasta-seasonings-product-poddar-foods-13.png",
        offer:'25% off',
      price:'30',
      rating:''
    },

  ],
};
