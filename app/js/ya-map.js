// Создает обработчик события window.onLoad
YMaps.jQuery(function() {
  // Создает экземпляр карты и привязывает его к созданному контейнеру
  var map = new YMaps.Map(YMaps.jQuery("#YMap")[0]);
  map.addControl(new YMaps.Zoom());
  // Создает стиль значка метки
  var s = new YMaps.Style();
  s.iconStyle = new YMaps.IconStyle();
  s.iconStyle.href = "./images/map-pin.png";
  s.iconStyle.size = new YMaps.Point(67, 100);
  s.iconStyle.offset = new YMaps.Point(-33, -100);
  var placemark = new YMaps.Placemark(
    new YMaps.GeoPoint(30.329370, 59.934989),
    {
      style: s
    }
  );

  // Добавляет метку на карту
  map.addOverlay(placemark);

  map.addOverlay(placemark);
  // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
  map.setCenter(new YMaps.GeoPoint(30.329370, 59.934989), 15);
});
