ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([99.386551, 0.802481, 100.605658, 1.612718]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataDesaDalamKabupatenPadangLawas_1 = new ol.format.GeoJSON();
var features_DataDesaDalamKabupatenPadangLawas_1 = format_DataDesaDalamKabupatenPadangLawas_1.readFeatures(json_DataDesaDalamKabupatenPadangLawas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DataDesaDalamKabupatenPadangLawas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataDesaDalamKabupatenPadangLawas_1.addFeatures(features_DataDesaDalamKabupatenPadangLawas_1);
var lyr_DataDesaDalamKabupatenPadangLawas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataDesaDalamKabupatenPadangLawas_1, 
                style: style_DataDesaDalamKabupatenPadangLawas_1,
                popuplayertitle: 'Data Desa Dalam Kabupaten Padang Lawas',
                interactive: true,
                title: '<img src="styles/legend/DataDesaDalamKabupatenPadangLawas_1.png" /> Data Desa Dalam Kabupaten Padang Lawas'
            });
var format_TeknikFilterDesa_2 = new ol.format.GeoJSON();
var features_TeknikFilterDesa_2 = format_TeknikFilterDesa_2.readFeatures(json_TeknikFilterDesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeknikFilterDesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeknikFilterDesa_2.addFeatures(features_TeknikFilterDesa_2);
var lyr_TeknikFilterDesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeknikFilterDesa_2, 
                style: style_TeknikFilterDesa_2,
                popuplayertitle: 'Teknik Filter Desa',
                interactive: true,
                title: '<img src="styles/legend/TeknikFilterDesa_2.png" /> Teknik Filter Desa'
            });
var format_TeknikDissolveKecamatan_3 = new ol.format.GeoJSON();
var features_TeknikDissolveKecamatan_3 = format_TeknikDissolveKecamatan_3.readFeatures(json_TeknikDissolveKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeknikDissolveKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeknikDissolveKecamatan_3.addFeatures(features_TeknikDissolveKecamatan_3);
var lyr_TeknikDissolveKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeknikDissolveKecamatan_3, 
                style: style_TeknikDissolveKecamatan_3,
                popuplayertitle: 'Teknik Dissolve Kecamatan',
                interactive: true,
    title: 'Teknik Dissolve Kecamatan<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_0.png" /> Aek Nabara Barumun<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_1.png" /> Barumun<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_2.png" /> Barumun Selatan<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_3.png" /> Barumun Tengah<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_4.png" /> Batang Lubu Sutam<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_5.png" /> Batang Onang<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_6.png" /> Huristak<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_7.png" /> Huta Raja Tinggi<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_8.png" /> Lubuk Barumun<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_9.png" /> Portibi<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_10.png" /> Sihapas Barumun<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_11.png" /> Sosa<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_12.png" /> Sosopan<br />\
    <img src="styles/legend/TeknikDissolveKecamatan_3_13.png" /> Ulu Barumun<br />' });
var format_VisualisasiDataDesa_4 = new ol.format.GeoJSON();
var features_VisualisasiDataDesa_4 = format_VisualisasiDataDesa_4.readFeatures(json_VisualisasiDataDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VisualisasiDataDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VisualisasiDataDesa_4.addFeatures(features_VisualisasiDataDesa_4);
var lyr_VisualisasiDataDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VisualisasiDataDesa_4, 
                style: style_VisualisasiDataDesa_4,
                popuplayertitle: 'Visualisasi Data Desa',
                interactive: true,
    title: 'Visualisasi Data Desa<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_0.png" /> Aek Bargot<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_1.png" /> Aek Bonban<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_2.png" /> Aek Buaton<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_3.png" /> Aek Haruaya<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_4.png" /> Aek Lancat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_5.png" /> Aek Nabara Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_6.png" /> Aek Nabara Jae/Padang Garugur Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_7.png" /> Aek Nabara Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_8.png" /> Aek Nabara Tonga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_9.png" /> Aek Nabara Tonga/Aek Nabara Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_10.png" /> Aek Nabara Tonga/Padang Garugur Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_11.png" /> Aek Siala<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_12.png" /> Aek Sorik<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_13.png" /> Aek Tanduk<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_14.png" /> Aek Tinga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_15.png" /> Aek Tunjang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_16.png" /> Aer Bale<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_17.png" /> Aliaga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_18.png" /> Ampolu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_19.png" /> Area Tidak Terdefinisi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_20.png" /> Arse Simartokis/Pagaran Baringin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_21.png" /> Arsesimatorkis<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_22.png" /> Bahal Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_23.png" /> Bahal Batu/Padang Garugur<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_24.png" /> Balangka<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_25.png" /> Bangkuang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_26.png" /> Bangkudu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_27.png" /> Bangun Raya<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_28.png" /> Banua Tonga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_29.png" /> Bara Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_30.png" /> Bara Batu/Gunung Manon<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_31.png" /> Batang Bulu Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_32.png" /> Batang Bulu Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_33.png" /> Batang Bulu Lama<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_34.png" /> Batang Bulu Lama/Tanjung Purba Tua<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_35.png" /> Batang Bulu Tanggal<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_36.png" /> Batang Tanggal Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_37.png" /> Batu Gajah<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_38.png" /> Batu Mamak<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_39.png" /> Batusundung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_40.png" /> Binabo Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_41.png" /> Binabo Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_42.png" /> Binanga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_43.png" /> Binanga Tolu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_44.png" /> Binanga/Janji Manahan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_45.png" /> Bire<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_46.png" /> Bonal<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_47.png" /> Bonan Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_48.png" /> Botung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_49.png" /> Bulu Cina<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_50.png" /> Bulusonik<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_51.png" /> Gading<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_52.png" /> Gala Bonang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_53.png" /> Gamarupu Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_54.png" /> Ganal<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_55.png" /> Ginduang Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_56.png" /> Gonting Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_57.png" /> Gonting Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_58.png" /> Gulangan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_59.png" /> Gunung Barani<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_60.png" /> Gunung Baringin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_61.png" /> Gunung Intan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_62.png" /> Gunung Inten<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_63.png" /> Gunung Malintang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_64.png" /> Gunung Manaon<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_65.png" /> Gunung Manobot<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_66.png" /> Gunung Matinggi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_67.png" /> Gunung Tua<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_68.png" /> Hadungdung Aek Rampah<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_69.png" /> Hadungdung Aek Rampah/Paran Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_70.png" /> Hadungdung Pintu Padang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_71.png" /> Handang Kopo<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_72.png" /> Handio<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_73.png" /> Handis Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_74.png" /> Hapung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_75.png" /> Hapung Torop<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_76.png" /> Harang Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_77.png" /> Harang Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_78.png" /> Hasahatan Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_79.png" /> Hasahatan Jae/Binabo Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_80.png" /> Hasahatan Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_81.png" /> Hatongga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_82.png" /> Horuon<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_83.png" /> Hulim<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_84.png" /> Huristak<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_85.png" /> Hurung Jilok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_86.png" /> Huta Bara<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_87.png" /> Huta Bargot<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_88.png" /> Huta Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_89.png" /> Huta Lombang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_90.png" /> Huta Nopan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_91.png" /> Huta Pasir Ulak Tano<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_92.png" /> Huta Raja Lamo<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_93.png" /> Huta Ruhom<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_94.png" /> Hutabaru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_95.png" /> Hutabaru Siundol<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_96.png" /> Hutabaru Sosopan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_97.png" /> Hutaibus<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_98.png" /> Hutaimbaru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_99.png" /> Hutanopan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_100.png" /> Hutaraja Tinggi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_101.png" /> Hutarimbaru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_102.png" /> Janji Lobi Lima<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_103.png" /> Janji Manahan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_104.png" /> Janji Maria<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_105.png" /> Janji Matogu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_106.png" /> Janji Raja<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_107.png" /> Janjilobi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_108.png" /> Janjiraja<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_109.png" /> Kelurahan Pasar Sibuhuan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_110.png" /> Limbong<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_111.png" /> Lubuk Bunut<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_112.png" /> Lubuk Gonting<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_113.png" /> Lumban Huayan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_114.png" /> Mananti Sosa Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_115.png" /> Mananti Sosa Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_116.png" /> Mandian<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_117.png" /> Manggis<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_118.png" /> Manombo<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_119.png" /> Marenu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_120.png" /> Matondang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_121.png" /> Mompang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_122.png" /> Mondang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_123.png" /> Muara Malinto Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_124.png" /> Muara Malinto Lama<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_125.png" /> Muara Tige<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_126.png" /> Padang Garugur<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_127.png" /> Padang Garugur Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_128.png" /> Padang Garugur Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_129.png" /> Padang Garugur Tonga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_130.png" /> Padang Hasior Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_131.png" /> Padang Hasior Lombang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_132.png" /> Padang Matinggi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_133.png" /> Pagaran Baringin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_134.png" /> Pagaran Bira Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_135.png" /> Pagaran Dolok Pinarik<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_136.png" /> Pagaran Dolok Sosa Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_137.png" /> Pagaran Jae Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_138.png" /> Pagaran Jalu-Jalu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_139.png" /> Pagaran Malaka<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_140.png" /> Pagaran Manggis<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_141.png" /> Pagaran Mompang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_142.png" /> Pagaran Silindung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_143.png" /> Pagaran Tayas<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_144.png" /> Pagaranbira Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_145.png" /> Pagur Satio<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_146.png" /> Panarian<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_147.png" /> Pancaukan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_148.png" /> Pangirkiran Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_149.png" /> Panyabungan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_150.png" /> Papaso<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_151.png" /> Paran Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_152.png" /> Paran Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_153.png" /> Paran Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_154.png" /> Paran Napa Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_155.png" /> Paran Napa Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_156.png" /> Paran Tonga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_157.png" /> Parapat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_158.png" /> Parau Sorat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_159.png" /> Paringgonan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_160.png" /> Paringgonan Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_161.png" /> Parmainan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_162.png" /> Parsombaan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_163.png" /> Pasar Binanga<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_164.png" /> Pasar Binanga/Unterudang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_165.png" /> Pasar Huristak<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_166.png" /> Pasar Ipuh<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_167.png" /> Pasar Latong<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_168.png" /> Pasar Panyabungan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_169.png" /> Pasar Ujung Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_170.png" /> Pasir Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_171.png" /> Pasir Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_172.png" /> Pasir Lancat Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_173.png" /> Pasir Lancat Lama<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_174.png" /> Pasir Pinang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_175.png" /> Paya Bahung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_176.png" /> Paya Bujing<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_177.png" /> Paya Ombur<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_178.png" /> Pinarik<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_179.png" /> Pintu Padang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_180.png" /> Pir Trans Sosa I A<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_181.png" /> Pir Trans Sosa I B<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_182.png" /> Pir Trans Sosa Ii<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_183.png" /> Pir Trans Sosa Iii A<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_184.png" /> Pir Trans Sosa Iii B<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_185.png" /> Pir Trans Sosa Iv<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_186.png" /> Pir Trans Sosa V<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_187.png" /> Pir Trans Sosa Vi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_188.png" /> Plasma Mondang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_189.png" /> Pp. Makmur<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_190.png" /> Pulo Bariang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_191.png" /> Purba Tua<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_192.png" /> Ramba<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_193.png" /> Rao-Rao Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_194.png" /> Roburan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_195.png" /> Rombayan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_196.png" /> Saba Rimba<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_197.png" /> Sabahotang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_198.png" /> Salambue<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_199.png" /> Sangkilon<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_200.png" /> Sayur Mahincat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_201.png" /> Sayur Matua<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_202.png" /> Sayur Matua/Sayur Mahincat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_203.png" /> Siabu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_204.png" /> Siadam<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_205.png" /> Siala Gundi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_206.png" /> Sialambue<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_207.png" /> Siali-Ali<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_208.png" /> Sianggunan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_209.png" /> Sibatu Loting<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_210.png" /> Sibodak Papaso<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_211.png" /> Sibodak Papaso/Pagaran Baringin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_212.png" /> Sibodak Sosa Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_213.png" /> Sibontar<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_214.png" /> Siboris Bahal<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_215.png" /> Siboris Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_216.png" /> Siboris Dolok/Siboris Lombang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_217.png" /> Siboris Lombang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_218.png" /> Siborna Bunut<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_219.png" /> Sibual Buali<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_220.png" /> Sibualbuali<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_221.png" /> Sibuhuan Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_222.png" /> Sibuhuan Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_223.png" /> Sidokan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_224.png" /> Sidomulio<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_225.png" /> Sidongdong<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_226.png" /> Sigading<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_227.png" /> Sigala-Gala<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_228.png" /> Sigalapung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_229.png" /> Siginduang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_230.png" /> Sigorbus Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_231.png" /> Sigorbus Jae/Sigorbus Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_232.png" /> Sigorbus Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_233.png" /> Sihaborgoan Barumun<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_234.png" /> Sihaborgoan Dalan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_235.png" /> Sihaporas<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_236.png" /> Sihiuk<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_237.png" /> Silenjeng<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_238.png" /> Simangambat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_239.png" /> Simaninggir<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_240.png" /> Simaninggir Sosopan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_241.png" /> Simanuldang Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_242.png" /> Simanuldang Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_243.png" /> Simanuldang Julu/Handang Kopo<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_244.png" /> Simarancar<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_245.png" /> Simartolu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_246.png" /> Siojo<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_247.png" /> Siolip<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_248.png" /> Sipagabu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_249.png" /> Siparau<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_250.png" /> Sipirok Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_251.png" /> Siraisan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_252.png" /> Sisalean<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_253.png" /> Sisoma<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_254.png" /> Sitada-Tada<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_255.png" /> Sitarolo Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_256.png" /> Siundol Dolok<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_257.png" /> Siundol Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_258.png" /> Siundol Jae/Siundol Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_259.png" /> Siundol Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_260.png" /> Sosopan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_261.png" /> Sosopan Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_262.png" /> Subulussalam<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_263.png" /> Sungai Jior<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_264.png" /> Sungai Korang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_265.png" /> Suro Dingin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_266.png" /> Tamiang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_267.png" /> Tandihat<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_268.png" /> Tandolan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_269.png" /> Tangga Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_270.png" /> Tangga Bosi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_271.png" /> Tanjung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_272.png" /> Tanjung Ale<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_273.png" /> Tanjung Bale<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_274.png" /> Tanjung Barani<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_275.png" /> Tanjung Baringin<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_276.png" /> Tanjung Baringin Simarulak<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_277.png" /> Tanjung Baru<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_278.png" /> Tanjung Botung<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_279.png" /> Tanjung Botung Pinarik<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_280.png" /> Tanjung Botung Sosa Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_281.png" /> Tanjung Durian<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_282.png" /> Tanjung Morang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_283.png" /> Tanjung Purba Tua<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_284.png" /> Tanjung Rokan<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_285.png" /> Tanobato<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_286.png" /> Tapian Nauli<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_287.png" /> Tar Sihoda-Hoda<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_288.png" /> Tobing<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_289.png" /> Tobing Jae<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_290.png" /> Tobing Julu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_291.png" /> Tobing Tinggi<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_292.png" /> Tobing Tinggi/Pagaran Mompang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_293.png" /> Tobing Tinggi/Sihiuk<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_294.png" /> Ujung Batu<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_295.png" /> Ujung Batu I<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_296.png" /> Ujung Batu Ii<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_297.png" /> Ujung Batu Iii<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_298.png" /> Ujung Batu Iv<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_299.png" /> Ujung Batu V<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_300.png" /> Ujung Gading<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_301.png" /> Ujung Padang<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_302.png" /> Ulu Aer<br />\
    <img src="styles/legend/VisualisasiDataDesa_4_303.png" /> Unterudang<br />' });
var format_AngkaPendudukDalamDesa_5 = new ol.format.GeoJSON();
var features_AngkaPendudukDalamDesa_5 = format_AngkaPendudukDalamDesa_5.readFeatures(json_AngkaPendudukDalamDesa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AngkaPendudukDalamDesa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AngkaPendudukDalamDesa_5.addFeatures(features_AngkaPendudukDalamDesa_5);
var lyr_AngkaPendudukDalamDesa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AngkaPendudukDalamDesa_5, 
                style: style_AngkaPendudukDalamDesa_5,
                popuplayertitle: 'Angka Penduduk Dalam Desa',
                interactive: true,
    title: 'Angka Penduduk Dalam Desa<br />\
    <img src="styles/legend/AngkaPendudukDalamDesa_5_0.png" /> 0,003 - 0,054<br />\
    <img src="styles/legend/AngkaPendudukDalamDesa_5_1.png" /> 0,054 - 0,092<br />\
    <img src="styles/legend/AngkaPendudukDalamDesa_5_2.png" /> 0,092 - 0,15<br />\
    <img src="styles/legend/AngkaPendudukDalamDesa_5_3.png" /> 0,15 - 0,236<br />\
    <img src="styles/legend/AngkaPendudukDalamDesa_5_4.png" /> 0,236 - 0,96<br />' });
var format_TeknikLightnessDesa_6 = new ol.format.GeoJSON();
var features_TeknikLightnessDesa_6 = format_TeknikLightnessDesa_6.readFeatures(json_TeknikLightnessDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TeknikLightnessDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeknikLightnessDesa_6.addFeatures(features_TeknikLightnessDesa_6);
var lyr_TeknikLightnessDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeknikLightnessDesa_6, 
                style: style_TeknikLightnessDesa_6,
                popuplayertitle: 'Teknik Lightness Desa',
                interactive: true,
    title: 'Teknik Lightness Desa<br />\
    <img src="styles/legend/TeknikLightnessDesa_6_0.png" /> 0,000001 - 0,000094<br />\
    <img src="styles/legend/TeknikLightnessDesa_6_1.png" /> 0,000094 - 0,000218<br />\
    <img src="styles/legend/TeknikLightnessDesa_6_2.png" /> 0,000218 - 0,00054<br />\
    <img src="styles/legend/TeknikLightnessDesa_6_3.png" /> 0,00054 - 0,001184<br />\
    <img src="styles/legend/TeknikLightnessDesa_6_4.png" /> 0,001184 - 0,014816<br />' });
var format_CentroidVisualisasiPeta_7 = new ol.format.GeoJSON();
var features_CentroidVisualisasiPeta_7 = format_CentroidVisualisasiPeta_7.readFeatures(json_CentroidVisualisasiPeta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CentroidVisualisasiPeta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroidVisualisasiPeta_7.addFeatures(features_CentroidVisualisasiPeta_7);
var lyr_CentroidVisualisasiPeta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentroidVisualisasiPeta_7, 
                style: style_CentroidVisualisasiPeta_7,
                popuplayertitle: 'Centroid Visualisasi Peta',
                interactive: true,
    title: 'Centroid Visualisasi Peta<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_0.png" /> 0,000001 - 0,000031<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_1.png" /> 0,000031 - 0,000094<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_2.png" /> 0,000094 - 0,00015<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_3.png" /> 0,00015 - 0,000218<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_4.png" /> 0,000218 - 0,000316<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_5.png" /> 0,000316 - 0,00054<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_6.png" /> 0,00054 - 0,000791<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_7.png" /> 0,000791 - 0,001184<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_8.png" /> 0,001184 - 0,002074<br />\
    <img src="styles/legend/CentroidVisualisasiPeta_7_9.png" /> 0,002074 - 0,014816<br />' });
var format_DiagramDataDesa_8 = new ol.format.GeoJSON();
var features_DiagramDataDesa_8 = format_DiagramDataDesa_8.readFeatures(json_DiagramDataDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DiagramDataDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiagramDataDesa_8.addFeatures(features_DiagramDataDesa_8);
var lyr_DiagramDataDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiagramDataDesa_8, 
                style: style_DiagramDataDesa_8,
                popuplayertitle: 'Diagram Data Desa',
                interactive: true,
                title: '<img src="styles/legend/DiagramDataDesa_8.png" /> Diagram Data Desa'
            });
var format_DataKoordinatKecamatan_9 = new ol.format.GeoJSON();
var features_DataKoordinatKecamatan_9 = format_DataKoordinatKecamatan_9.readFeatures(json_DataKoordinatKecamatan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DataKoordinatKecamatan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataKoordinatKecamatan_9.addFeatures(features_DataKoordinatKecamatan_9);
cluster_DataKoordinatKecamatan_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_DataKoordinatKecamatan_9
});
var lyr_DataKoordinatKecamatan_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_DataKoordinatKecamatan_9, 
                style: style_DataKoordinatKecamatan_9,
                popuplayertitle: 'Data Koordinat Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/DataKoordinatKecamatan_9.png" /> Data Koordinat Kecamatan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DataDesaDalamKabupatenPadangLawas_1.setVisible(true);lyr_TeknikFilterDesa_2.setVisible(true);lyr_TeknikDissolveKecamatan_3.setVisible(true);lyr_VisualisasiDataDesa_4.setVisible(true);lyr_AngkaPendudukDalamDesa_5.setVisible(true);lyr_TeknikLightnessDesa_6.setVisible(true);lyr_CentroidVisualisasiPeta_7.setVisible(true);lyr_DiagramDataDesa_8.setVisible(true);lyr_DataKoordinatKecamatan_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DataDesaDalamKabupatenPadangLawas_1,lyr_TeknikFilterDesa_2,lyr_TeknikDissolveKecamatan_3,lyr_VisualisasiDataDesa_4,lyr_AngkaPendudukDalamDesa_5,lyr_TeknikLightnessDesa_6,lyr_CentroidVisualisasiPeta_7,lyr_DiagramDataDesa_8,lyr_DataKoordinatKecamatan_9];
lyr_DataDesaDalamKabupatenPadangLawas_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PALAS_NAMO': 'PALAS_NAMO', 'PALAS_KECA': 'PALAS_KECA', 'PALAS_KABU': 'PALAS_KABU', 'PALAS_PROV': 'PALAS_PROV', 'PALAS_SHAP': 'PALAS_SHAP', 'PALAS_SH_1': 'PALAS_SH_1', 'PALAS_JUML': 'PALAS_JUML', 'PALAS_KET': 'PALAS_KET', 'PALAS_TAHU': 'PALAS_TAHU', 'PALAS_LINK': 'PALAS_LINK', 'PALAS_LI_1': 'PALAS_LI_1', 'PALAS_SUMB': 'PALAS_SUMB', 'PALAS_TA_1': 'PALAS_TA_1', 'ALL_IMAGE': 'ALL_IMAGE', });
lyr_TeknikFilterDesa_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KDCPUM': 'KDCPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Data Wil26': 'Data Wil26', 'Data Wil27': 'Data Wil27', });
lyr_TeknikDissolveKecamatan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KDCPUM': 'KDCPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Data Wil26': 'Data Wil26', 'Data Wil27': 'Data Wil27', });
lyr_VisualisasiDataDesa_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KDCPUM': 'KDCPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Data Wil26': 'Data Wil26', 'Data Wil27': 'Data Wil27', 'GAMBAR': 'GAMBAR', });
lyr_AngkaPendudukDalamDesa_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KDCPUM': 'KDCPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Data Wil26': 'Data Wil26', });
lyr_TeknikLightnessDesa_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PALAS_NAMO': 'PALAS_NAMO', 'PALAS_KECA': 'PALAS_KECA', 'PALAS_KABU': 'PALAS_KABU', 'PALAS_PROV': 'PALAS_PROV', 'PALAS_SHAP': 'PALAS_SHAP', 'PALAS_SH_1': 'PALAS_SH_1', 'PALAS_JUML': 'PALAS_JUML', 'PALAS_KET': 'PALAS_KET', 'PALAS_TAHU': 'PALAS_TAHU', 'PALAS_LINK': 'PALAS_LINK', 'PALAS_LI_1': 'PALAS_LI_1', 'PALAS_SUMB': 'PALAS_SUMB', 'PALAS_TA_1': 'PALAS_TA_1', });
lyr_CentroidVisualisasiPeta_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PALAS_NAMO': 'PALAS_NAMO', 'PALAS_KECA': 'PALAS_KECA', 'PALAS_KABU': 'PALAS_KABU', 'PALAS_PROV': 'PALAS_PROV', 'PALAS_SHAP': 'PALAS_SHAP', 'PALAS_SH_1': 'PALAS_SH_1', 'PALAS_JUML': 'PALAS_JUML', 'PALAS_KET': 'PALAS_KET', 'PALAS_TAHU': 'PALAS_TAHU', 'PALAS_LINK': 'PALAS_LINK', 'PALAS_LI_1': 'PALAS_LI_1', 'PALAS_SUMB': 'PALAS_SUMB', 'PALAS_TA_1': 'PALAS_TA_1', });
lyr_DiagramDataDesa_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'PALAS_NAMO': 'PALAS_NAMO', 'PALAS_KECA': 'PALAS_KECA', 'PALAS_KABU': 'PALAS_KABU', 'PALAS_PROV': 'PALAS_PROV', 'PALAS_SHAP': 'PALAS_SHAP', 'PALAS_SH_1': 'PALAS_SH_1', 'PALAS_JUML': 'PALAS_JUML', 'PALAS_KET': 'PALAS_KET', 'PALAS_TAHU': 'PALAS_TAHU', 'PALAS_LINK': 'PALAS_LINK', 'PALAS_LI_1': 'PALAS_LI_1', 'PALAS_SUMB': 'PALAS_SUMB', 'PALAS_TA_1': 'PALAS_TA_1', });
lyr_DataKoordinatKecamatan_9.set('fieldAliases', {'IDE': 'IDE', 'KECAMATAN': 'KECAMATAN', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_DataDesaDalamKabupatenPadangLawas_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PALAS_NAMO': 'TextEdit', 'PALAS_KECA': 'TextEdit', 'PALAS_KABU': 'TextEdit', 'PALAS_PROV': 'TextEdit', 'PALAS_SHAP': 'TextEdit', 'PALAS_SH_1': 'TextEdit', 'PALAS_JUML': 'TextEdit', 'PALAS_KET': 'TextEdit', 'PALAS_TAHU': 'TextEdit', 'PALAS_LINK': 'TextEdit', 'PALAS_LI_1': 'TextEdit', 'PALAS_SUMB': 'TextEdit', 'PALAS_TA_1': 'TextEdit', 'ALL_IMAGE': '', });
lyr_TeknikFilterDesa_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KDCPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Data Wil26': 'TextEdit', 'Data Wil27': 'TextEdit', });
lyr_TeknikDissolveKecamatan_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KDCPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Data Wil26': 'TextEdit', 'Data Wil27': 'TextEdit', });
lyr_VisualisasiDataDesa_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KDCPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Data Wil26': 'TextEdit', 'Data Wil27': 'TextEdit', 'GAMBAR': 'ExternalResource', });
lyr_AngkaPendudukDalamDesa_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KDCPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Data Wil26': 'TextEdit', });
lyr_TeknikLightnessDesa_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PALAS_NAMO': 'TextEdit', 'PALAS_KECA': 'TextEdit', 'PALAS_KABU': 'TextEdit', 'PALAS_PROV': 'TextEdit', 'PALAS_SHAP': 'TextEdit', 'PALAS_SH_1': 'TextEdit', 'PALAS_JUML': 'TextEdit', 'PALAS_KET': 'TextEdit', 'PALAS_TAHU': 'TextEdit', 'PALAS_LINK': 'TextEdit', 'PALAS_LI_1': 'TextEdit', 'PALAS_SUMB': 'TextEdit', 'PALAS_TA_1': 'TextEdit', });
lyr_CentroidVisualisasiPeta_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PALAS_NAMO': 'TextEdit', 'PALAS_KECA': 'TextEdit', 'PALAS_KABU': 'TextEdit', 'PALAS_PROV': 'TextEdit', 'PALAS_SHAP': 'TextEdit', 'PALAS_SH_1': 'TextEdit', 'PALAS_JUML': 'TextEdit', 'PALAS_KET': 'TextEdit', 'PALAS_TAHU': 'TextEdit', 'PALAS_LINK': 'TextEdit', 'PALAS_LI_1': 'TextEdit', 'PALAS_SUMB': 'TextEdit', 'PALAS_TA_1': 'TextEdit', });
lyr_DiagramDataDesa_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'PALAS_NAMO': 'TextEdit', 'PALAS_KECA': 'TextEdit', 'PALAS_KABU': 'TextEdit', 'PALAS_PROV': 'TextEdit', 'PALAS_SHAP': 'TextEdit', 'PALAS_SH_1': 'TextEdit', 'PALAS_JUML': 'TextEdit', 'PALAS_KET': 'TextEdit', 'PALAS_TAHU': 'TextEdit', 'PALAS_LINK': 'TextEdit', 'PALAS_LI_1': 'TextEdit', 'PALAS_SUMB': 'TextEdit', 'PALAS_TA_1': 'TextEdit', });
lyr_DataKoordinatKecamatan_9.set('fieldImages', {'IDE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_DataDesaDalamKabupatenPadangLawas_1.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'PALAS_NAMO': 'no label', 'PALAS_KECA': 'no label', 'PALAS_KABU': 'no label', 'PALAS_PROV': 'no label', 'PALAS_SHAP': 'no label', 'PALAS_SH_1': 'no label', 'PALAS_JUML': 'inline label - always visible', 'PALAS_KET': 'no label', 'PALAS_TAHU': 'no label', 'PALAS_LINK': 'no label', 'PALAS_LI_1': 'no label', 'PALAS_SUMB': 'no label', 'PALAS_TA_1': 'inline label - always visible', 'ALL_IMAGE': 'inline label - always visible', });
lyr_TeknikFilterDesa_2.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'KDCPUM': 'no label', 'WADMKD': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Data Wil26': 'no label', 'Data Wil27': 'no label', });
lyr_TeknikDissolveKecamatan_3.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'KDCPUM': 'no label', 'WADMKD': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Data Wil26': 'no label', 'Data Wil27': 'no label', });
lyr_VisualisasiDataDesa_4.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'KDCPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Data Wil26': 'no label', 'Data Wil27': 'no label', 'GAMBAR': 'inline label - always visible', });
lyr_AngkaPendudukDalamDesa_5.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'KDCPUM': 'no label', 'WADMKD': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Data Wil26': 'inline label - always visible', });
lyr_TeknikLightnessDesa_6.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'PALAS_NAMO': 'no label', 'PALAS_KECA': 'no label', 'PALAS_KABU': 'no label', 'PALAS_PROV': 'no label', 'PALAS_SHAP': 'no label', 'PALAS_SH_1': 'no label', 'PALAS_JUML': 'inline label - always visible', 'PALAS_KET': 'no label', 'PALAS_TAHU': 'no label', 'PALAS_LINK': 'no label', 'PALAS_LI_1': 'no label', 'PALAS_SUMB': 'no label', 'PALAS_TA_1': 'no label', });
lyr_CentroidVisualisasiPeta_7.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'PALAS_NAMO': 'no label', 'PALAS_KECA': 'no label', 'PALAS_KABU': 'no label', 'PALAS_PROV': 'no label', 'PALAS_SHAP': 'no label', 'PALAS_SH_1': 'no label', 'PALAS_JUML': 'inline label - always visible', 'PALAS_KET': 'no label', 'PALAS_TAHU': 'no label', 'PALAS_LINK': 'no label', 'PALAS_LI_1': 'no label', 'PALAS_SUMB': 'no label', 'PALAS_TA_1': 'no label', });
lyr_DiagramDataDesa_8.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'PALAS_NAMO': 'header label - always visible', 'PALAS_KECA': 'inline label - always visible', 'PALAS_KABU': 'inline label - always visible', 'PALAS_PROV': 'inline label - always visible', 'PALAS_SHAP': 'no label', 'PALAS_SH_1': 'no label', 'PALAS_JUML': 'inline label - always visible', 'PALAS_KET': 'no label', 'PALAS_TAHU': 'no label', 'PALAS_LINK': 'no label', 'PALAS_LI_1': 'no label', 'PALAS_SUMB': 'no label', 'PALAS_TA_1': 'no label', });
lyr_DataKoordinatKecamatan_9.set('fieldLabels', {'IDE': 'no label', 'KECAMATAN': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_DataKoordinatKecamatan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});