TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472.webm"
  },
  "label": "DM",
  "width": 1920,
  "loop": false,
  "id": "video_7AB00E25_51F3_127E_41C7_17B52509A472",
  "height": 1080,
  "thumbnailUrl": "media/video_7AB00E25_51F3_127E_41C7_17B52509A472_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "id": "Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
   "label": "Media",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "children": [
    {
     "class": "MenuItem",
     "label": "HOME",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "PHYTOCHEMISTRY",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "5",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "CENTRAL INSTRUMENTATION FACILITY",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "8",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "9",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "10",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "11",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "12",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "13",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000"
  },
  "class": "Panorama",
  "pitch": 0,
  "label": "HOME",
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "toolTipShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "id": "IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B",
   "maxWidth": 80,
   "toolTipOpacity": 1,
   "mode": "push",
   "maxHeight": 100,
   "shadow": false,
   "toolTipBorderSize": 1,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "toolTipPaddingTop": 4,
   "toolTipTextShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontFamily": "Arial",
   "class": "IconButton",
   "paddingLeft": 0,
   "toolTipPaddingBottom": 4,
   "toolTipFontStyle": "normal",
   "toolTipFontSize": 12,
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "cursor": "hand",
   "paddingTop": 0,
   "minWidth": 50,
   "width": "100%",
   "minHeight": 50,
   "verticalAlign": "middle",
   "borderSize": 0,
   "toolTip": "Enable VR",
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "iconURL": "skin/IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B.png",
   "toolTipFontWeight": "normal",
   "paddingRight": 0,
   "height": "100%",
   "transparencyActive": false,
   "paddingBottom": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowOpacity": 1,
   "borderRadius": 0,
   "toolTipTextShadowColor": "#000000"
  },
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3.webm"
  },
  "label": "PDZ",
  "width": 1920,
  "loop": false,
  "id": "video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3",
  "height": 1080,
  "thumbnailUrl": "media/video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.49,
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 118,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 236,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 10.49,
        "pitch": -41.57
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": -170.64,
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "hfov": 10.49,
      "popupMaxWidth": "65%",
      "rotationX": 0,
      "popupMaxHeight": "65%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 640,
         "width": 1024,
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_5E5C17E2_52BE_66B9_41AF_54EC297FBC58); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.3,
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 89,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.55
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 178,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        },
        "hfov": 9.3,
        "pitch": -28.55
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
  "class": "Panorama",
  "pitch": 0,
  "label": "PHYTOCHEMISTRY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -45.16,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_5FF8C84A_52BE_6989_41AE_4F259E76352C); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.72,
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 44,
              "width": 130,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.35
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 88,
              "width": 261,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 14.72,
           "pitch": -18.35
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "vfov": 180,
     "hfovMax": 120,
     "partial": false,
     "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
     "class": "Panorama",
     "pitch": 0,
     "label": "5",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 128.9,
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "yaw": -45.16,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 128.9,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 130.11,
   "pitch": -2.82
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3)",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76033875_51F1_3EDE_41A5_6EE38B245B90.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76033875_51F1_3EDE_41A5_6EE38B245B90.webm"
  },
  "label": "MB",
  "width": 1920,
  "loop": false,
  "id": "video_76033875_51F1_3EDE_41A5_6EE38B245B90",
  "height": 1080,
  "thumbnailUrl": "media/video_76033875_51F1_3EDE_41A5_6EE38B245B90_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "id": "overlay_4F20F8D9_50A5_873F_4185_24C8DB425224",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 41.52,
        "yaw": 48.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 195,
           "width": 200,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -9.07
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 48.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 717,
           "width": 733,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_4_0.png"
          }
         ]
        },
        "hfov": 41.52,
        "pitch": -9.07
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_5FE3885C_52BE_6989_4196_78749B234B02); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.04,
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 96,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 192,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.04,
        "pitch": -14.56
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 44,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.88
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 89,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 5.28,
        "pitch": -6.88
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654F705B_50BD_8733_41D0_F63243597D98, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CBAAA02_52B2_A979_41D2_170EEDCADD04, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37, this.PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476, '65%', '65%', true, true); this.PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476.set('selectedIndex', 0); ; this.viewer_uid58484635_52B2_999B_41B1_CE42F9E7FDCBVideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_1B37166D_50D8_881A_41D0_15E8E78F99B1",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.83,
        "yaw": 39.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 66,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.62
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 39.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 133,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_3_0.png"
          }
         ]
        },
        "hfov": 7.83,
        "pitch": -8.62
       }
      ]
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "yaw": 39.7,
      "showEasing": "cubic_in",
      "pitch": -8.62,
      "rotationZ": 0,
      "id": "popup_654F705B_50BD_8733_41D0_F63243597D98",
      "hideEasing": "cubic_out",
      "hideDuration": 500,
      "loop": false,
      "video": {
       "class": "VideoResource",
       "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
       "height": 1080,
       "width": 1920,
       "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
      },
      "hfov": 7.83,
      "popupMaxWidth": "65%",
      "rotationX": 0,
      "popupMaxHeight": "65%",
      "rotationY": 0,
      "autoplay": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "vfov": 180,
  "hfovMax": 120,
  "partial": false,
  "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
  "class": "Panorama",
  "pitch": 0,
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -90.53,
    "panorama": {
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_700D2974_50A2_F9F5_41C1_F0B652530DF3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 47.17,
           "yaw": -156.05,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 152,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.22
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -156.05,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 1108,
              "width": 844,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_8_0.png"
             }
            ]
           },
           "hfov": 47.17,
           "pitch": -8.22
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_4E373B42_50A6_B90D_41C0_72107BA985FE",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 29.88,
           "yaw": 138.46,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 122,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.23
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 138.46,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 842,
              "width": 516,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_9_0.png"
             }
            ]
           },
           "hfov": 29.88,
           "pitch": -8.23
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": true,
         "useHandCursor": true,
         "id": "overlay_705F2532_50A7_890D_4150_A2D46E19681C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.57,
           "yaw": 70.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 167,
              "width": 166,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_1_0_map.gif"
             }
            ]
           },
           "pitch": -0.25
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 70.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 334,
              "width": 333,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_10_0.png"
             }
            ]
           },
           "hfov": 19.57,
           "pitch": -0.25
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_5950B8BD_52BE_6A8B_41D1_01D35C1BD88F); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.85,
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 29,
              "width": 97,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 58,
              "width": 195,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 10.85,
           "pitch": -20.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_5E84A72B_5062_8913_41D3_2E436895D709, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7, null, null, null, null, false)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.42,
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 87,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 164,
              "width": 174,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 9.42,
           "pitch": -24.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_596538AB_52BE_6A8F_41D1_9E6122FB811A); this.mainPlayList.set('selectedIndex', 8)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.86,
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 25,
              "width": 85,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.6
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 170,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           },
           "hfov": 9.86,
           "pitch": -12.6
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB059FB_52B2_AA8F_41C2_D9A27A4ECA36, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD, '65%', '65%', true, true); this.PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD.set('selectedIndex', 0); ; this.viewer_uid584E8639_52B2_998B_41C5_DEDFB0919DECVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_1B6D99BB_50D8_F87E_41A8_78212ADAD698",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.52,
           "yaw": 75.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 37,
              "width": 38,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.82
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 75.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 74,
              "width": 76,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_7_0.png"
             }
            ]
           },
           "hfov": 4.52,
           "pitch": -1.82
          }
         ]
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": -145.01,
         "showEasing": "cubic_in",
         "rotationZ": 0,
         "id": "popup_5E84A72B_5062_8913_41D3_2E436895D709",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "hfov": 9.42,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 640,
            "width": 1024,
            "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
           }
          ]
         },
         "rotationY": 0,
         "pitch": -24.53
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 75.22,
         "showEasing": "cubic_in",
         "pitch": -1.82,
         "rotationZ": 0,
         "id": "popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
          "height": 1080,
          "width": 1920,
          "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
         },
         "hfov": 4.52,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "showDuration": 500,
         "class": "PopupPanoramaOverlay",
         "yaw": 128.52,
         "showEasing": "cubic_in",
         "pitch": -14.03,
         "rotationZ": 0,
         "id": "popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
         "hideEasing": "cubic_out",
         "hideDuration": 500,
         "loop": false,
         "video": {
          "class": "VideoResource",
          "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
          "height": 1080,
          "width": 1920,
          "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
         },
         "hfov": 6.84,
         "popupMaxWidth": "65%",
         "rotationX": 0,
         "popupMaxHeight": "65%",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB0D9FC_52B2_AA89_41C8_793D362FB4AB, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2, '65%', '65%', true, true); this.PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2.set('selectedIndex', 0); ; this.viewer_uid584E063A_52B2_9989_41CD_8B5C87F6A8D5VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_67818DCD_50A7_7917_41B3_206D6A17D08A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.84,
           "yaw": 128.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0_0_map.gif"
             }
            ]
           },
           "pitch": -14.03
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 128.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_11_0.png"
             }
            ]
           },
           "hfov": 6.84,
           "pitch": -14.03
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "vfov": 180,
     "hfovMax": 120,
     "partial": false,
     "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
     "class": "Panorama",
     "pitch": 0,
     "label": "8",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -89.79,
       "panorama": {
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_4DC82B90_50A2_990D_41D2_364DA84C6CC2",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 83.7,
              "yaw": 36.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 132,
                 "width": 200,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_1_0_map.gif"
                }
               ]
              },
              "pitch": -5.38
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 36.07,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1150,
                 "width": 1733,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_8_0.png"
                }
               ]
              },
              "hfov": 83.7,
              "pitch": -5.38
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_71A486BE_50BE_8B75_41CC_0933C5D197EA",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 9.57,
              "yaw": 102.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 63,
                 "width": 81,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_1_0_map.gif"
                }
               ]
              },
              "pitch": -6.19
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 102.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 127,
                 "width": 162,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_9_0.png"
                }
               ]
              },
              "hfov": 9.57,
              "pitch": -6.19
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": true,
            "useHandCursor": true,
            "id": "overlay_4FE1B952_50BD_790D_41CE_96900BBBAB6A",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 46.53,
              "yaw": 154.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 200,
                 "width": 132,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_1_0_map.gif"
                }
               ]
              },
              "pitch": -7.58
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 154.44,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 1253,
                 "width": 832,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_10_0.png"
                }
               ]
              },
              "hfov": 46.53,
              "pitch": -7.58
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_596D6899_52BE_6A8B_41C2_5463A14312B0); this.mainPlayList.set('selectedIndex', 9)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.82,
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 94,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.9
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 52,
                 "width": 188,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 10.82,
              "pitch": -13.9
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_5FC0A86F_52BE_6987_41CC_6516EB182EF6); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.74,
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 130,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.59
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 261,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              },
              "hfov": 13.74,
              "pitch": -27.59
             }
            ]
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "rotate": false,
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "inertia": false
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB069FD_52B2_AA8B_41CF_D71D3C07494D, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6, this.PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE, '65%', '65%', true, true); this.PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE.set('selectedIndex', 0); ; this.viewer_uid584F163D_52B2_998B_4193_4710B49F751AVideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1B537871_50DB_B80A_41BB_6691B31B4B6D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.37,
              "yaw": 145.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 94,
                 "width": 96,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -24.62
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 145.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 188,
                 "width": 192,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_5_0.png"
                }
               ]
              },
              "hfov": 10.37,
              "pitch": -24.62
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB169FE_52B2_AA89_41AA_C060267539F7, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842, '65%', '65%', true, true); this.PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842.set('selectedIndex', 0); ; this.viewer_uid584CE63D_52B2_998A_41AE_38ABEF42B5BFVideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1B004E27_50DB_F816_41C7_2B709D4218B7",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.76,
              "yaw": 102.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 40,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "pitch": -5.79
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 102.02,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 80,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_6_0.png"
                }
               ]
              },
              "hfov": 4.76,
              "pitch": -5.79
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_67FA235E_50A5_8935_41D0_DC909E301520, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB6D9FE_52B2_AA86_41C5_0F2F86AEAA52, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B, '65%', '65%', true, true); this.PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B.set('selectedIndex', 0); ; this.viewer_uid584C963E_52B2_9989_41C4_29076B837655VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_1C1EDF6C_50DB_B81B_417E_8CD5BB4FD66B",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.03,
              "yaw": 65.32,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0_0_map.gif"
                }
               ]
              },
              "pitch": -3.83
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 65.32,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_7_0.png"
                }
               ]
              },
              "hfov": 7.03,
              "pitch": -3.83
             }
            ]
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 145.17,
            "showEasing": "cubic_in",
            "pitch": -24.62,
            "rotationZ": 0,
            "id": "popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
            },
            "hfov": 10.37,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 65.32,
            "showEasing": "cubic_in",
            "pitch": -3.83,
            "rotationZ": 0,
            "id": "popup_67FA235E_50A5_8935_41D0_DC909E301520",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
            },
            "hfov": 7.03,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "showDuration": 500,
            "class": "PopupPanoramaOverlay",
            "yaw": 102.02,
            "showEasing": "cubic_in",
            "pitch": -5.79,
            "rotationZ": 0,
            "id": "popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
            "hideEasing": "cubic_out",
            "hideDuration": 500,
            "loop": false,
            "video": {
             "class": "VideoResource",
             "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
             "height": 1080,
             "width": 1920,
             "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
            },
            "hfov": 4.76,
            "popupMaxWidth": "65%",
            "rotationX": 0,
            "popupMaxHeight": "65%",
            "rotationY": 0,
            "autoplay": true
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "vfov": 180,
        "hfovMax": 120,
        "partial": false,
        "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
        "class": "Panorama",
        "pitch": 0,
        "label": "9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 86.03,
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "yaw": -89.79,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 158.9,
          "panorama": {
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": true,
               "useHandCursor": true,
               "id": "overlay_4B34AF87_50A2_F913_41CE_9C309C78BCE3",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 30.09,
                 "yaw": 139.69,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 71,
                    "width": 200,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -8.5
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "roll": 0,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 139.69,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 187,
                    "width": 520,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_4_0.png"
                   }
                  ]
                 },
                 "hfov": 30.09,
                 "pitch": -8.5
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_5FB1B81B_52BE_698F_41C0_F3574F2B6136); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.36,
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 31,
                    "width": 104,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.27
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 63,
                    "width": 208,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "hfov": 11.36,
                 "pitch": -23.27
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_5F9CD833_52BE_699F_4190_86D5244D62C3); this.mainPlayList.set('selectedIndex', 10)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.63,
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 44,
                    "width": 130,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.46
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 88,
                    "width": 261,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "hfov": 13.63,
                 "pitch": -28.46
                }
               ]
              },
              {
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "rotate": false,
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "inertia": false
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB7E9FF_52B2_AA87_41BB_FDAFA8B67FC2, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496, this.PlayList_59A35663_52B2_99BF_41AB_C072D692E595, '95%', '95%', true, true); this.PlayList_59A35663_52B2_99BF_41AB_C072D692E595.set('selectedIndex', 0); ; this.viewer_uid584DB640_52B2_99F9_41D1_690DC8B816F0VideoPlayer.play();  }",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_1DDF29D8_50D8_B83A_41D0_BAC83EF14B05",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.74,
                 "yaw": 146.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 57,
                    "width": 57,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -6.31
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 146.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 114,
                    "width": 114,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_3_0.png"
                   }
                  ]
                 },
                 "hfov": 6.74,
                 "pitch": -6.31
                }
               ]
              },
              {
               "showDuration": 500,
               "class": "PopupPanoramaOverlay",
               "yaw": 146.87,
               "showEasing": "cubic_in",
               "pitch": -6.31,
               "rotationZ": 0,
               "id": "popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
               "hideEasing": "cubic_out",
               "hideDuration": 500,
               "loop": false,
               "video": {
                "class": "VideoResource",
                "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
                "height": 1080,
                "width": 1920,
                "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
               },
               "hfov": 6.74,
               "popupMaxWidth": "95%",
               "rotationX": 0,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "autoplay": true
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "vfov": 180,
           "hfovMax": 120,
           "partial": false,
           "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
           "class": "Panorama",
           "pitch": 0,
           "label": "10",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 86.11,
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "yaw": 158.9,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 99.8,
             "panorama": {
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": true,
                  "useHandCursor": true,
                  "id": "overlay_4B36D1A3_50AD_8913_41D2_CCE5FC3DD8CE",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.85,
                    "yaw": -74.4,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 75,
                       "width": 74,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_10_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -8.63
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "roll": 0,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -74.4,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 151,
                       "width": 149,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_10_0.png"
                      }
                     ]
                    },
                    "hfov": 8.85,
                    "pitch": -8.63
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_5E01E501_5067_890E_41C4_E3042DD293C7, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_4615FEA2_507D_BB0D_41B5_18D249293007, null, null, null, null, false)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B72BA2C_2B38_B0AE_4174_164ADBFB86CA",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.54,
                    "yaw": -74.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 38,
                       "width": 38,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -9.49
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -74.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 77,
                       "width": 77,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0.png"
                      }
                     ]
                    },
                    "hfov": 4.54,
                    "pitch": -9.49
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_5E7EF7AF_52BE_6687_41D4_A684CABC177C); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.67,
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 44,
                       "width": 130,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.11
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 88,
                       "width": 261,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    },
                    "hfov": 13.67,
                    "pitch": -28.11
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_5E6D57CC_52BE_6689_41CE_A2FFC51680AE); this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.7,
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 27,
                       "width": 102,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.68
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 205,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    },
                    "hfov": 10.7,
                    "pitch": -28.68
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.04,
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 14,
                       "width": 44,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.95
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 29,
                       "width": 88,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    },
                    "hfov": 5.04,
                    "pitch": -14.95
                   }
                  ]
                 },
                 {
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "rotate": false,
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "inertia": false
                 },
                 {
                  "showDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "yaw": -74.93,
                  "showEasing": "cubic_in",
                  "rotationZ": 0,
                  "id": "popup_5E01E501_5067_890E_41C4_E3042DD293C7",
                  "hideEasing": "cubic_out",
                  "hideDuration": 500,
                  "hfov": 4.54,
                  "popupMaxWidth": "65%",
                  "rotationX": 0,
                  "popupMaxHeight": "65%",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 640,
                     "width": 1024,
                     "url": "media/popup_5E01E501_5067_890E_41C4_E3042DD293C7_0_2.jpg"
                    }
                   ]
                  },
                  "rotationY": 0,
                  "pitch": -9.49
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "vfov": 180,
              "hfovMax": 120,
              "partial": false,
              "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
              "class": "Panorama",
              "pitch": 0,
              "label": "11",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -140.96,
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "yaw": 99.8,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 85.77,
                "panorama": {
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "overlays": [
                    {
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "rotate": false,
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "inertia": false
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -37.79,
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "id": "popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "hfov": 6.37,
                     "popupMaxWidth": "65%",
                     "rotationX": 0,
                     "popupMaxHeight": "65%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 640,
                        "width": 1024,
                        "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": -25.27
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -77.89,
                     "showEasing": "cubic_in",
                     "rotationZ": 0,
                     "id": "popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "hfov": 4.35,
                     "popupMaxWidth": "65%",
                     "rotationX": 0,
                     "popupMaxHeight": "65%",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 640,
                        "width": 1024,
                        "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
                       }
                      ]
                     },
                     "rotationY": 0,
                     "pitch": -11.06
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_4867AA68_5062_BB1D_41BF_C26299F50422",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 30.37,
                       "yaw": -150.47,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 141,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -14.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -150.47,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 373,
                          "width": 525,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_11_0.png"
                         }
                        ]
                       },
                       "hfov": 30.37,
                       "pitch": -14.58
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_48558740_505D_890D_41B6_2F030622A51A",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 28.98,
                       "yaw": -33.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 146,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.53
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -33.09,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 366,
                          "width": 500,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_12_0.png"
                         }
                        ]
                       },
                       "hfov": 28.98,
                       "pitch": -25.53
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_484C769E_505F_8B35_41BB_C7F774ED6BF5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 22.4,
                       "yaw": -76.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 116,
                          "width": 191,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.46
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -76.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 232,
                          "width": 383,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_13_0.png"
                         }
                        ]
                       },
                       "hfov": 22.4,
                       "pitch": -12.46
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": true,
                     "useHandCursor": true,
                     "id": "overlay_478F55C9_50A2_891F_41CF_19F27DE6B1BE",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 70.36,
                       "yaw": 131.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 112,
                          "width": 200,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.96
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "roll": 0,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 131.05,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 766,
                          "width": 1364,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_14_0.png"
                         }
                        ]
                       },
                       "hfov": 70.36,
                       "pitch": -5.96
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB49A00_52B2_A979_41C7_01458236A16C, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F, this.PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93, '95%', '95%', true, true); this.PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93.set('selectedIndex', 0); ; this.viewer_uid59B31645_52B2_99FA_41D2_53186EAEF05AVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_4720C492_506F_8F0D_41CE_57EC0985FAAA",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.02,
                       "yaw": 119.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.44
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 119.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_10_0.png"
                         }
                        ]
                       },
                       "hfov": 7.02,
                       "pitch": -4.44
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_5CB40A01_52B2_A97B_41C7_96C54AF8FAFB, this.video_76174C24_51F1_167E_41CF_523D5490D758, this.PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A, '95%', '95%', true, true); this.PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A.set('selectedIndex', 0); ; this.viewer_uid59B0C646_52B2_99F9_41A5_BF6DE90BC69EVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_5E157E3E_5065_9B75_41CA_60C9EAA501D8",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.86,
                       "yaw": -145.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -13.07
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -145.71,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_9_0.png"
                         }
                        ]
                       },
                       "hfov": 6.86,
                       "pitch": -13.07
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_594AB8CF_52BE_6A87_41A4_9632B873255A); this.mainPlayList.set('selectedIndex', 12)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.18,
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 27,
                          "width": 102,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 54,
                          "width": 204,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       },
                       "hfov": 11.18,
                       "pitch": -22.58
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_594528E1_52BE_6ABB_41D0_A9519ECB59D2); this.mainPlayList.set('selectedIndex', 10)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.35,
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 33,
                          "width": 117,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -16.65
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 66,
                          "width": 235,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       },
                       "hfov": 13.35,
                       "pitch": -16.65
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E090CC_5062_8715_41B8_632E16047E40, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.35,
                       "yaw": -77.89,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 41,
                          "width": 37,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.06
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -77.89,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 83,
                          "width": 74,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       },
                       "hfov": 4.35,
                       "pitch": -11.06
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E, null, null, null, null, false)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.37,
                       "yaw": -37.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -37.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "hfov": 6.37,
                       "pitch": -25.27
                      }
                     ]
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": -145.71,
                     "showEasing": "cubic_in",
                     "pitch": -13.07,
                     "rotationZ": 0,
                     "id": "popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
                      "height": 1080,
                      "width": 1920,
                      "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
                     },
                     "hfov": 6.86,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "showDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "yaw": 119.8,
                     "showEasing": "cubic_in",
                     "pitch": -4.44,
                     "rotationZ": 0,
                     "id": "popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
                     "hideEasing": "cubic_out",
                     "hideDuration": 500,
                     "loop": false,
                     "video": {
                      "class": "VideoResource",
                      "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
                      "height": 1080,
                      "width": 1920,
                      "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
                     },
                     "hfov": 7.02,
                     "popupMaxWidth": "95%",
                     "rotationX": 0,
                     "popupMaxHeight": "95%",
                     "rotationY": 0,
                     "autoplay": true
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "vfov": 180,
                 "hfovMax": 120,
                 "partial": false,
                 "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
                 "class": "Panorama",
                 "pitch": 0,
                 "label": "12",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 97.27,
                   "panorama": {
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "overlays": [
                       {
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "rotate": false,
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "inertia": false
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "useHandCursor": true,
                        "id": "overlay_4CE89025_50AD_8717_41D1_2E46E1B20F01",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 49.75,
                          "yaw": 34.17,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 144,
                             "width": 200,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -29.38
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "roll": 0,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 34.17,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 646,
                             "width": 897,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_5_0.png"
                            }
                           ]
                          },
                          "hfov": 49.75,
                          "pitch": -29.38
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": true,
                        "useHandCursor": true,
                        "id": "overlay_4E3B4873_50AF_87F2_41C3_8847A37CE450",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 22.77,
                          "yaw": 67.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 123,
                             "width": 194,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_6_1_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -11.42
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "roll": 0,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 67.73,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 246,
                             "width": 389,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_6_0.png"
                            }
                           ]
                          },
                          "hfov": 22.77,
                          "pitch": -11.42
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_0327E370_50C9_880A_4197_D1986B274A6E, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E300D6_5062_8735_41B0_46C730EED362, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_694EB6C3_2B69_D1DA_41C5_644885469A76",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.33,
                          "yaw": 74.08,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 45,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -8.58
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 74.08,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 91,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0.png"
                            }
                           ]
                          },
                          "hfov": 5.33,
                          "pitch": -8.58
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE, {'pressedIconHeight':20,'pressedBorderColor':'#000000','backgroundOpacity':0.3,'borderColor':'#000000','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'paddingRight':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','rollOverIconWidth':20,'rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB, null, null, null, null, false)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.61,
                          "yaw": 48.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 66,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -32.46
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 48.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 129,
                             "width": 132,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          },
                          "hfov": 6.61,
                          "pitch": -32.46
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_5E4E17FF_52BE_6687_41BE_D510C3760DB5); this.mainPlayList.set('selectedIndex', 11)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.58,
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 130,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.81
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 261,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          },
                          "hfov": 13.58,
                          "pitch": -28.81
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.37,
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 33,
                             "width": 105,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.1
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 67,
                             "width": 210,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          },
                          "hfov": 11.37,
                          "pitch": -24.1
                         }
                        ]
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": 74.08,
                        "showEasing": "cubic_in",
                        "rotationZ": 0,
                        "id": "popup_0327E370_50C9_880A_4197_D1986B274A6E",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "hfov": 5.33,
                        "popupMaxWidth": "65%",
                        "rotationX": 0,
                        "popupMaxHeight": "65%",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 640,
                           "width": 1024,
                           "url": "media/popup_0327E370_50C9_880A_4197_D1986B274A6E_0_2.jpg"
                          }
                         ]
                        },
                        "rotationY": 0,
                        "pitch": -8.58
                       },
                       {
                        "showDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "yaw": 48.72,
                        "showEasing": "cubic_in",
                        "rotationZ": 0,
                        "id": "popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
                        "hideEasing": "cubic_out",
                        "hideDuration": 500,
                        "hfov": 6.61,
                        "popupMaxWidth": "65%",
                        "rotationX": 0,
                        "popupMaxHeight": "65%",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 640,
                           "width": 1024,
                           "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
                          }
                         ]
                        },
                        "rotationY": 0,
                        "pitch": -32.46
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "vfov": 180,
                    "hfovMax": 120,
                    "partial": false,
                    "cardboardMenu": "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
                    "class": "Panorama",
                    "pitch": 0,
                    "label": "13",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -104.48,
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "yaw": 97.27,
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "hfov": 360,
                    "hfovMin": 120
                   },
                   "yaw": -104.48,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -95.11,
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "yaw": 85.77,
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "hfov": 360,
                 "hfovMin": 120
                },
                "yaw": -95.11,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "hfov": 360,
              "hfovMin": 120
             },
             "yaw": -140.96,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "hfov": 360,
           "hfovMin": 120
          },
          "yaw": 86.11,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "hfov": 360,
        "hfovMin": 120
       },
       "yaw": 86.03,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 12.85,
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "yaw": -90.53,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 12.85,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.81,
   "pitch": -11.51
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 7)",
     "pitchSpeed": 11.7,
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "targetYaw": -26.5,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.38,
   "pitch": -17.19
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 146.25,
   "pitch": -22.61
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.34,
   "pitch": -1.19
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 10)",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.18,
   "pitch": -6.21
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 11)",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 155.54,
   "pitch": -10.32
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 12)",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.58,
   "pitch": -28.38
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 10.63,
     "targetPitch": -7.98,
     "easing": "cubic_in_out",
     "targetYaw": 74.7,
     "yawSpeed": 20.35
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 10.63,
     "targetPitch": -6.49,
     "easing": "cubic_in_out",
     "targetYaw": 125.43,
     "yawSpeed": 20.35
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 7.42,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 13.9
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496.webm"
  },
  "label": "12 Angela Paulson",
  "width": 1920,
  "loop": false,
  "id": "video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
  "height": 1080,
  "thumbnailUrl": "media/video_79E6AF2E_51F1_724B_41D0_772ED7CFF496_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76174C24_51F1_167E_41CF_523D5490D758.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758.webm"
  },
  "label": "07 Smriti",
  "width": 1920,
  "loop": false,
  "id": "video_76174C24_51F1_167E_41CF_523D5490D758",
  "height": 1080,
  "thumbnailUrl": "media/video_76174C24_51F1_167E_41CF_523D5490D758_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6.webm"
  },
  "label": "06 Usha T",
  "width": 1920,
  "loop": false,
  "id": "video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
  "height": 1080,
  "thumbnailUrl": "media/video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37.webm"
  },
  "label": "05 Nikitha",
  "width": 1920,
  "loop": false,
  "id": "video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
  "height": 1080,
  "thumbnailUrl": "media/video_76330817_51F1_1E5A_41C8_BAE5158F0B37_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F.webm"
  },
  "label": "03 Ramprasad",
  "width": 1920,
  "loop": false,
  "id": "video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
  "height": 1080,
  "thumbnailUrl": "media/video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0, this.video_7AB00E25_51F3_127E_41C7_17B52509A472)",
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02ADF2E8_5065_8B1D_41C6_BD85492FB9D2, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AD42E8_5065_8B1D_4166_5D27B343E830, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF16C5_5161_6D76_41CE_23717A708B39, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DF46C6_5161_6D75_4178_022F57B6BB96, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, true, -1, this.effect_3C285B3E_51A2_9975_41D2_BF356E9E6FF5, 'showEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, true, -1, this.effect_02AD82EA_5065_8B1D_41BB_A790737A5F2B, 'showEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C287B3E_51A2_9972_41B7_656605B0E8B4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_386801D4_51E2_8935_417D_BAC8BBA751DE, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_77794990_5161_67ED_41B0_94BBED414FC4, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_5EBB48EA_52BE_6A89_41CD_529C52429E35, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02ADF2E8_5065_8B1D_41C6_BD85492FB9D2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBB28EA_52BE_6A89_41CA_CF8A110E00E6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBB38EB_52BE_6A8F_4131_D522DC604690, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AD42E8_5065_8B1D_4166_5D27B343E830, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBB08EB_52BE_6A8F_41C0_7C60BF0C5744, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40DF66C6_5161_6D75_4191_1EB238710CC7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40DFB6C6_5161_6D75_4100_CA059BCAE420, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C286B3E_51A2_9975_41C0_005CB61B26B7, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2A8BF4_5161_7B15_41D4_11BB99605814, 'hideEffect', false); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_5EBCE8EC_52BE_6A89_41C5_9B53B6575EA2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777EB990_5161_67ED_41A9_907A812EB140, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777EA990_5161_67EE_41C3_34CC041F734E, 'hideEffect', false)",
    "media": "this.video_7AB00E25_51F3_127E_41C7_17B52509A472"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452', this.Image_227442D1_2F53_0813_41B3_7271F7D70452.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0', this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 500, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')){ if(this.getKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0')) { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, -1, this.effect_5C8C0876_400D_056C_4197_4D21DD837174, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, false, -1, this.effect_5EBC38EC_52BE_6A8A_41D2_58375B0F5262, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_5EBC08ED_52BE_6A8B_41D2_F77A9E62F757, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_5EBC18ED_52BE_6A8B_4196_FA3C4EA6E2C2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_5EBDE8ED_52BE_6A8A_41B9_A9FD534ECCEF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')){ if(this.getKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452')) { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, true, -1, this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69, 'showEffect', false); } else { this.setComponentVisibility(this.Image_227442D1_2F53_0813_41B3_7271F7D70452, false, -1, this.effect_5EBDF8EE_52BE_6A89_41CE_16CB4ECA9A1C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_227442D1_2F53_0813_41B3_7271F7D70452'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_5EBB48EE_52BE_6A89_41D2_B7C236B9A95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_5EBB58EF_52BE_6A87_41C2_B42456D47A07, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_5EBB28EF_52BE_6A87_41CC_FC2FEC7FF6D0, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_5EBB38EF_52BE_6A87_41CC_36354748A5C4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_5EBB08F0_52BE_6A99_41CE_EC4A49AA18D3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7646B174_4217_6060_41B9_177997DC3A13, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBB18F0_52BE_6A99_41B2_564316F4A2A3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_5EBCE8F0_52BE_6A99_41CD_DE105DAFF75F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_5EBCF8F1_52BE_6A9B_41C5_2053D8A90BA2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_5EBCC8F1_52BE_6A9B_418F_4FF8E4AA235A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_5EBCD8F1_52BE_6A9A_41AB_B7C69F359CAD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3)",
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27', this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7B920785_51A1_2BF7_41C5_D136CE1F305D, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7B923785_51A1_2BF7_41B8_43C104024EDA, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02B3C2F1_5065_8B0F_41CA_E4E92C846DA9, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E3AF33C_51AF_2B15_41B2_27E4CB2A5FF3, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02B162F2_5065_8B0D_41D0_46EF00D464D1, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40D3F6D3_5161_6D13_41D2_2C692CF41E38, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40D016D3_5161_6D13_41D3_CA853C79A3F9, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_5C29BBFC_5161_7B15_41BB_84BB0F959C3F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B062F3_5065_88F2_41CC_381B81A954A2, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_3C299B47_51A2_9913_41D1_032BF92982D7, 'showEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, true, -1, this.effect_02B0B2F3_5065_88F3_41C3_5BDE47852535, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_386BC1DB_51E2_8933_41CE_6A56EC13056A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2E1BFD_5161_7B17_41B3_3D79B9191519, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D0D9055_51A1_2517_41C1_FE837C86DD98, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_777F8998_5161_671D_41D0_1D2F3D530961, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4C224A94_5161_2515_41D2_B98015408EA3, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBC58F2_52BE_6A99_41CC_4A1E0932B37D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7B920785_51A1_2BF7_41C5_D136CE1F305D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_5EBC38F3_52BE_6A9F_41C8_BCBA4DCB3F54, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7B923785_51A1_2BF7_41B8_43C104024EDA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02B3C2F1_5065_8B0F_41CA_E4E92C846DA9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBC08F3_52BE_6A9F_41CB_E0EAF1F05780, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBDE8F3_52BE_6A9F_41C3_AABA19E26EF9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E3AF33C_51AF_2B15_41B2_27E4CB2A5FF3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02B162F2_5065_8B0D_41D0_46EF00D464D1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBDC8F4_52BE_6A99_41BB_238B211A5856, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40D3C6D3_5161_6D13_41A3_F2A715D4D9B6, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40D3C6D3_5161_6D13_41A3_F2A715D4D9B6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40D066D3_5161_6D13_41D0_5AF62796F130, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40D066D3_5161_6D13_41D0_5AF62796F130, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_5C299BFC_5161_7B15_41CC_B251707AAB35, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_5C299BFC_5161_7B15_41CC_B251707AAB35, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B012F4_5065_88F5_41D0_FE81353B06C6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B012F4_5065_88F5_41D0_FE81353B06C6, 'hideEffect', false); if(this.existsKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')){ if(this.getKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27')) { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, true, -1, this.effect_3C299B47_51A2_9913_41D1_032BF92982D7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_5EBDD8F4_52BE_6A99_41D4_047F4B383F2C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_395C4B78_51E3_79FD_4190_8DD908FD8F27'); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02B052F3_5065_88F3_41CC_E3D343A1A522, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02B052F3_5065_88F3_41CC_E3D343A1A522, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_3C29CB48_51A2_991D_41B1_7D8BB999ACB6, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_3C29CB48_51A2_991D_41B1_7D8BB999ACB6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2E6BFD_5161_7B17_41AF_3BB32198CBD6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C2E6BFD_5161_7B17_41AF_3BB32198CBD6, 'hideEffect', false); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_5EBDA8F5_52BE_6A9B_41D1_1AAD6ED91016, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D0D9055_51A1_2517_41C1_FE837C86DD98, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777FF999_5161_671F_41BB_97ACFB3DCF17, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777FF999_5161_671F_41BB_97ACFB3DCF17, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777FE999_5161_671F_41B5_6817F1B3835C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777FE999_5161_671F_41B5_6817F1B3835C, 'hideEffect', false)",
    "media": "this.video_799C7BA3_51F2_F27A_41D1_CB2231AC05C3"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBDB8F5_52BE_6A9B_41C7_FDBC4633BF40, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBD88F6_52BE_6A99_41D1_D423D46421B3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBD98F6_52BE_6A99_41C5_D6FAB4698F9E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7274D1DE_4FC9_8836_41CB_C35126518752, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EBD68F6_52BE_6A99_4199_609362114FD1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_727441DF_4FC9_8836_41CC_0D0B18042478, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EBD78F7_52BE_6A87_41D3_E67D65DEB595, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_5EBD28F7_52BE_6A87_41CE_B76E66727278, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_5EBCA8F7_52BE_6A86_41C1_DB5B9310453D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_5EBC88F8_52BE_6A89_41D0_89BBE81E61A2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_5EBC78F8_52BE_6A89_41C4_EFBC7D3F782F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_5EBC48F9_52BE_6A8B_41D4_405A0FFC2793, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_5EBC58F9_52BE_6A8B_41CB_67FE0ECCF03E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "begin": "this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBC08FA_52BE_6A89_41D3_8FCA57BFF02F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0E584_4211_A0A1_41C9_43847D46138C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBDE8FA_52BE_6A89_41D0_1E07556F6C32, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBDF8FA_52BE_6A89_41D4_443F6EA9C514, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBDC8FB_52BE_6A8F_41BA_12F4CF694554, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_5EBDA8FB_52BE_6A8F_41B6_1573EF930D77, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_5EBD88FB_52BE_6A8F_41BE_EA311C77DEC2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBD98FC_52BE_6A89_4168_A54830EF38A1, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726861E4_4FC9_880A_41B3_661275BA1317, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EBD48FC_52BE_6A89_41C2_6ADA9FF9392C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EBD28FC_52BE_6A89_41A8_D1DB4CC85216, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_31459F67_2FAE_D69A_4164_37DF78EF38D3, 'hideEffect', false); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_5EBD08FD_52BE_6A8B_41A4_97CBDCEBC319, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_5EBD18FD_52BE_6A8B_41D0_3CA5FF6893CB, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_5EBEE8FD_52BE_6A8B_41A8_B9D1B047A9B2, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5, this.video_76033875_51F1_3EDE_41A5_6EE38B245B90)",
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7B9E4791_51A1_2BEF_41AE_E1F81ED9998E, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7B9E7791_51A1_2BEF_41BD_EA361866B801, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02B982FD_5065_88F7_41CF_6D2CD804790B, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E41D349_51AF_2B7F_41A2_884BFF2E2B38, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02B972FE_5065_88F5_41B7_D367210DDBB0, 'showEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, true, -1, this.effect_40AAD6DF_5161_6D13_418B_D3B4081FF466, 'showEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, true, -1, this.effect_40AB06DF_5161_6D13_41C7_F847E26233E7, 'showEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_3C29FB52_51A2_990D_41D3_55BF0471F60A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B80300_5065_890D_41B7_E5F0EE7E2AAC, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C2A1B53_51A2_9933_41A8_ECCE344121CA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02B8B2FF_5065_88F2_419E_0B34EA58085D, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_386CF1E6_51E2_8915_41C2_EDFAB9CBF4DA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C327C08_5161_7CFD_41B1_7E4E2B3963E5, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D041061_51A1_252F_41B9_5238EB80AB51, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_777F79A3_5161_6732_41BD_5EA6A4C46C8A, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_4C296A9E_5161_2512_41BB_79D1D849D858, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBEB8FE_52BE_6A89_41C3_62C4E3F8EC5B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7B9E4791_51A1_2BEF_41AE_E1F81ED9998E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_5EBE98FE_52BE_6A89_41C9_CDD719AAE04A, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_7B9E7791_51A1_2BEF_41BD_EA361866B801, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_02B982FD_5065_88F7_41CF_6D2CD804790B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBE68FF_52BE_6A87_4181_2B63E5C277E0, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBE78FF_52BE_6A87_41B1_D253FD880DE5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_7E41D349_51AF_2B7F_41A2_884BFF2E2B38, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_02B972FE_5065_88F5_41B7_D367210DDBB0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBE58FF_52BE_6A87_41B7_99EF28623322, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40AB26DF_5161_6D13_4176_42601A3A3E20, 'hideEffect', false); this.setComponentVisibility(this.Container_41E00F2C_5161_7B35_41C6_BC2399CBF863, false, -1, this.effect_40AB26DF_5161_6D13_4176_42601A3A3E20, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40AB66DF_5161_6D13_41C1_2796437DB5B0, 'hideEffect', false); this.setComponentVisibility(this.IconButton_41096450_516F_2D6D_41C6_3B86CF181E54, false, -1, this.effect_40AB66DF_5161_6D13_41C1_2796437DB5B0, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_5C322C08_5161_7CFD_41C5_697F34AC7E0D, 'hideEffect', false); this.setComponentVisibility(this.Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8, false, -1, this.effect_5C322C08_5161_7CFD_41C5_697F34AC7E0D, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B82300_5065_890D_41D1_BC8C23F56CC0, 'hideEffect', false); this.setComponentVisibility(this.IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E, false, -1, this.effect_02B82300_5065_890D_41D1_BC8C23F56CC0, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C2A2B53_51A2_9933_41D0_CDCA740EBB36, 'hideEffect', false); this.setComponentVisibility(this.Container_395C4B78_51E3_79FD_4190_8DD908FD8F27, false, -1, this.effect_3C2A2B53_51A2_9933_41D0_CDCA740EBB36, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02B85300_5065_890D_41CD_E00AC7BFB434, 'hideEffect', false); this.setComponentVisibility(this.IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3, false, -1, this.effect_02B85300_5065_890D_41CD_E00AC7BFB434, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_3C2A3B54_51A2_9935_41BA_67C998C96B22, 'hideEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_3C2A3B54_51A2_9935_41BA_67C998C96B22, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C324C09_5161_7CFF_41BE_B68B56059BFF, 'hideEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5C324C09_5161_7CFF_41BE_B68B56059BFF, 'hideEffect', false); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_5EBE0900_52BE_6B79_419A_A58927725068, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_7D041061_51A1_252F_41B9_5238EB80AB51, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777F69A4_5161_6735_41D1_7AF8BC987709, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_777F69A4_5161_6735_41D1_7AF8BC987709, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777F59A4_5161_6735_41CC_87CDD9A7CA65, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_777F59A4_5161_6735_41CC_87CDD9A7CA65, 'hideEffect', false)",
    "media": "this.video_76033875_51F1_3EDE_41A5_6EE38B245B90"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0', this.Container_77D4607B_4271_6060_41A3_CF43634A36B0.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604', this.Container_6E17E57D_4213_6060_41A1_9148D02E3604.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBFF901_52BE_6B7B_41AF_32A1351CB79B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBFD901_52BE_6B7B_41AA_1435B27D8D3F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBFB901_52BE_6B7B_41C2_9BC027BC095D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBD3902_52BE_6B79_41C2_D669A6638B1B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726C61EB_4FC9_881E_41D1_58E533222243, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EBD0902_52BE_6B79_41C6_859CEA491973, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')){ if(this.getKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604')) { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, true, -1, this.effect_726DD1EB_4FC9_881E_418F_866B7958A526, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E17E57D_4213_6060_41A1_9148D02E3604, false, -1, this.effect_5EBEE902_52BE_6B7E_41BD_C20B1910A4A6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E17E57D_4213_6060_41A1_9148D02E3604'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, this.effect_5EBEF903_52BE_6B7F_41D3_DF1F30866851, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EBEC903_52BE_6B7F_4187_13BE7C52DE5F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')){ if(this.getKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0')) { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, true, -1, this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, -1, this.effect_5EBE8904_52BE_6B79_41C4_F45FCD8081B6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_77D4607B_4271_6060_41A3_CF43634A36B0'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_5EBE9904_52BE_6B79_41C9_3116401508E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBE5905_52BE_6B7B_41B6_3E351C392A4A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBE3905_52BE_6B7B_41C2_5A778D956DBA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBFE905_52BE_6B7B_41C8_215085B80281, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBFF906_52BE_6B79_41B1_4572DDAB053F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBFC906_52BE_6B79_41C0_78D80D7BD20B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EBFA906_52BE_6B79_41C7_1CAFB439E0D2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EBFB907_52BE_6B87_41BC_EAF30EE4EBC7, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EBF8907_52BE_6B87_41D3_A9929F5A505C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBF7908_52BE_6B89_41D4_39051CF7206A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726051F1_4FC9_880A_41D1_6185001C10DB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBF5908_52BE_6B89_41A8_C5C28DDF7E29, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5EBF2909_52BE_6B8B_418C_35ADD397C1CE, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_5EBF0909_52BE_6B8B_41B9_A30F0E46A59D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EB0C909_52BE_6B8B_41BF_DA223AFECBDF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EB0A909_52BE_6B8A_41C5_5660BA7DB70D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EB0890A_52BE_6B89_41AD_6ACA2BA45EBE, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EB0690A_52BE_6B89_41CD_E8038B58567F, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "begin": "this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EB0590B_52BE_6B8F_41C9_914F65CF5CEA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726311F5_4FC9_880A_41B4_030414259793, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B11592_4211_A0A0_41CE_905A6104BD57, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBFA90B_52BE_6B8F_41BF_470C659E9AE8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBF890C_52BE_6B89_41CC_E98BC5D6DC8A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EBF990C_52BE_6B89_41C7_8FE9CC2692F5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EBF790C_52BE_6B89_419D_558FA13904B7, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EBF290D_52BE_6B8B_41BB_95CE736D7E75, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EBF090D_52BE_6B8B_41AD_A0293838AB7C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EBF190E_52BE_6B89_41D0_FF0CC3CA8F15, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EB0C90E_52BE_6B89_41A5_B786A9118BC4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EB0A90E_52BE_6B89_41B0_02179B39240C, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EB0B90F_52BE_6B87_41D1_A960CCD121DB, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EB0690F_52BE_6B87_41C2_5997716B9C70, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EB05910_52BE_6B99_41BE_32A30500FFD1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EB03910_52BE_6B99_41A0_82D1CB275CED, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EB01910_52BE_6B99_41B4_D84B76BC7A0E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EB1C911_52BE_6B9B_41A4_0450270AE13B, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EB1A911_52BE_6B9B_41D3_FED801305A93, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5', this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5.get('visible')); this.registerKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8', this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.get('visible')); this.registerKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9', this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9.get('visible')); this.registerKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7', this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_5EB13912_52BE_6B99_41B0_0D4BFD3AF843, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_5EB11912_52BE_6B99_41D4_9E01D6F4C20C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')){ if(this.getKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7')) { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, true, -1, this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369, 'showEffect', false); } else { this.setComponentVisibility(this.Container_552C139E_41F7_60A0_41C0_6D7884D47FA7, false, -1, this.effect_5EB2A913_52BE_6B9F_41C2_BC31DC76ED8D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_552C139E_41F7_60A0_41C0_6D7884D47FA7'); if(this.existsKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')){ if(this.getKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9')) { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, true, -1, this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9, false, -1, this.effect_5EB28913_52BE_6B9F_41A8_B4017859205C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9'); if(this.existsKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')){ if(this.getKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8')) { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, true, -1, this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8, false, -1, this.effect_5EB26913_52BE_6B9F_41BF_4D8AE5378931, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8'); if(this.existsKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')){ if(this.getKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5')) { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, true, -1, null, null, false); } else { this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, -1, null, null, false); } }; this.unregisterKey('visibility_Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5EB25914_52BE_6B99_41C8_3919DC6A54D8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_76174C24_51F1_167E_41CF_523D5490D758",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14, this.video_76174C24_51F1_167E_41CF_523D5490D758)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid58484635_52B2_999B_41B1_CE42F9E7FDCBVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E360751_52BE_679B_41CF_F6B99E94152E",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid58484635_52B2_999B_41B1_CE42F9E7FDCBVideoPlayer)",
    "start": "this.viewer_uid58484635_52B2_999B_41B1_CE42F9E7FDCBVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476, 0, this.video_76330817_51F1_1E5A_41C8_BAE5158F0B37)"
   }
  ]
 },
 {
  "id": "PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584E8639_52B2_998B_41C5_DEDFB0919DECVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E288754_52BE_6799_41D0_51B1B3D7077F",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584E8639_52B2_998B_41C5_DEDFB0919DECVideoPlayer)",
    "start": "this.viewer_uid584E8639_52B2_998B_41C5_DEDFB0919DECVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584E063A_52B2_9989_41CD_8B5C87F6A8D5VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E280755_52BE_679B_41B5_EEC5CE977647",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584E063A_52B2_9989_41CD_8B5C87F6A8D5VideoPlayer)",
    "start": "this.viewer_uid584E063A_52B2_9989_41CD_8B5C87F6A8D5VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "id": "PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584F163D_52B2_998B_4193_4710B49F751AVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2AC757_52BE_6787_4190_9FCC3EE8F9BF",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584F163D_52B2_998B_4193_4710B49F751AVideoPlayer)",
    "start": "this.viewer_uid584F163D_52B2_998B_4193_4710B49F751AVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE, 0, this.video_76399BDC_51F1_11CE_41A0_5AE8296DEBD6)"
   }
  ]
 },
 {
  "id": "PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584CE63D_52B2_998A_41AE_38ABEF42B5BFVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2A6758_52BE_6789_419C_DF4A3A1EB982",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584CE63D_52B2_998A_41AE_38ABEF42B5BFVideoPlayer)",
    "start": "this.viewer_uid584CE63D_52B2_998A_41AE_38ABEF42B5BFVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584C963E_52B2_9989_41C4_29076B837655VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2A2758_52BE_6789_41AC_9E2DA990836F",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584C963E_52B2_9989_41C4_29076B837655VideoPlayer)",
    "start": "this.viewer_uid584C963E_52B2_9989_41C4_29076B837655VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_59A35663_52B2_99BF_41AB_C072D692E595",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid584DB640_52B2_99F9_41D1_690DC8B816F0VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2C675B_52BE_678F_4170_6C1E82B3EEEA",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid584DB640_52B2_99F9_41D1_690DC8B816F0VideoPlayer)",
    "start": "this.viewer_uid584DB640_52B2_99F9_41D1_690DC8B816F0VideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A35663_52B2_99BF_41AB_C072D692E595, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A35663_52B2_99BF_41AB_C072D692E595, 0, this.video_79E6AF2E_51F1_724B_41D0_772ED7CFF496)"
   }
  ]
 },
 {
  "id": "PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid59B31645_52B2_99FA_41D2_53186EAEF05AVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2FB75F_52BE_6787_41D1_D9B6C5785B2F",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid59B31645_52B2_99FA_41D2_53186EAEF05AVideoPlayer)",
    "start": "this.viewer_uid59B31645_52B2_99FA_41D2_53186EAEF05AVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93, 0, this.video_7639D9AA_51F1_1E4A_41C1_AEFB028C0D8F)"
   }
  ]
 },
 {
  "id": "PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A",
  "class": "PlayList",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "id": "viewer_uid59B0C646_52B2_99F9_41A5_BF6DE90BC69EVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 0,
      "playbackBarProgressOpacity": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#0066B3",
       "#6BA13C"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#0066B3",
       "#71A348"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 0,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 0,
      "progressRight": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid5E2F7760_52BE_67B9_41BF_0AB3F225BC55",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_76174C24_51F1_167E_41CF_523D5490D758",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid59B0C646_52B2_99F9_41A5_BF6DE90BC69EVideoPlayer)",
    "start": "this.viewer_uid59B0C646_52B2_99F9_41A5_BF6DE90BC69EVideoPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A, 0, this.video_76174C24_51F1_167E_41CF_523D5490D758)"
   }
  ]
 },
 "this.Menu_5E1C2772_52BE_6799_41C5_3253DD7384F4",
 {
  "id": "effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_4973D6BD_51D1_324E_41C0_AE2C94232344",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_510D3286_41F6_E0A0_41B7_0837F6E6C079",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_49156269_51D3_12F6_41D4_4641DC2CB11A",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_5F766399_51D7_3256_41C8_8058BFACBDFC",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_58318646_4F2F_2B69_41AC_962A6ED82AEE",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 {
  "id": "effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_74D59241_4213_63A0_41CB_DA1C684AF71F",
  "class": "FadeOutEffect",
  "easing": "cubic_in",
  "duration": 100
 },
 {
  "id": "effect_15430EDE_505D_7B35_41CA_3F5C176FC215",
  "class": "FadeOutEffect",
  "easing": "cubic_out",
  "duration": 500
 },
 {
  "id": "effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13",
  "class": "FadeInEffect",
  "easing": "cubic_in",
  "duration": 500
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ]
 },
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E360751_52BE_679B_41CF_F6B99E94152E"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CBAAA02_52B2_A979_41D2_170EEDCADD04",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A2F65F_52B2_9987_41CA_90821FAB2476.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_654F705B_50BD_8733_41D0_F63243597D98",
 "this.popup_5E84A72B_5062_8913_41D3_2E436895D709",
 {
  "id": "ImageResource_4617CE97_507D_BB33_41CC_277230F4FDD7",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_5E84A72B_5062_8913_41D3_2E436895D709_0_3.jpg"
   }
  ]
 },
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E288754_52BE_6799_41D0_51B1B3D7077F"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB059FB_52B2_AA8F_41C2_D9A27A4ECA36",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A2A660_52B2_99B9_41CD_E651F6B8C4BD.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_65BD6281_50A2_8B0E_41D1_6A6A3A214872",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E280755_52BE_679B_41B5_EEC5CE977647"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB0D9FC_52B2_AA89_41C8_793D362FB4AB",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A26660_52B2_99B9_41BE_B26109CA3EF2.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_654154AD_50A7_8F17_41CC_033E6CF6538E",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2AC757_52BE_6787_4190_9FCC3EE8F9BF"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB069FD_52B2_AA8B_41CF_D71D3C07494D",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A22661_52B2_99BB_41CC_C23679E95CAE.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_65155EA1_50A6_9B0F_41A2_DA50D7C2A9FC",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2A6758_52BE_6789_419C_DF4A3A1EB982"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB169FE_52B2_AA89_41AA_C060267539F7",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A3D662_52B2_99B9_41CA_C8A00B959842.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_6A02F7F5_50A2_88F7_41CF_48C2226BE573",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2A2758_52BE_6789_41AC_9E2DA990836F"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB6D9FE_52B2_AA86_41C5_0F2F86AEAA52",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A39662_52B2_99B9_41D4_666CB75B1B8B.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_67FA235E_50A5_8935_41D0_DC909E301520",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2C675B_52BE_678F_4170_6C1E82B3EEEA"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB7E9FF_52B2_AA87_41BB_FDAFA8B67FC2",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A35663_52B2_99BF_41AB_C072D692E595.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_66D14DEA_50A2_F91D_41C8_77D742AED913",
 "this.popup_5E01E501_5067_890E_41C4_E3042DD293C7",
 {
  "id": "ImageResource_4615FEA2_507D_BB0D_41B5_18D249293007",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_5E01E501_5067_890E_41C4_E3042DD293C7_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_5E01E501_5067_890E_41C4_E3042DD293C7_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_5E01E501_5067_890E_41C4_E3042DD293C7_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_5E01E501_5067_890E_41C4_E3042DD293C7_0_3.jpg"
   }
  ]
 },
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2FB75F_52BE_6787_41D1_D9B6C5785B2F"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB49A00_52B2_A979_41C7_01458236A16C",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A31664_52B2_99B9_41C4_E4A76EE70C93.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_673AFF1D_50AD_B937_41CD_D84791F4B91A",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "shadowVerticalLength": 0,
  "shadowHorizontalLength": 3,
  "titlePaddingLeft": 5,
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "children": [
   "this.viewer_uid5E2F7760_52BE_67B9_41BF_0AB3F225BC55"
  ],
  "shadowOpacity": 0.5,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingBottom": 5,
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_5CB40A01_52B2_A97B_41C7_96C54AF8FAFB",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerPaddingTop": 10,
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_59A0C664_52B2_99B9_41C2_1D86277BC33A.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "veilOpacity": 0.4,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_6AC20B05_50AE_F917_41AF_5EBBE7A3AAC3",
 "this.popup_0375FAC7_50CF_F816_41A2_8895EB06B570",
 {
  "id": "ImageResource_47E090CC_5062_8715_41B8_632E16047E40",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_0375FAC7_50CF_F816_41A2_8895EB06B570_0_3.jpg"
   }
  ]
 },
 "this.popup_0690991F_50C8_9836_41B5_3F1A35404AF0",
 {
  "id": "ImageResource_47E190CB_5062_8713_41B0_E16DED267F7E",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_0690991F_50C8_9836_41B5_3F1A35404AF0_0_3.jpg"
   }
  ]
 },
 "this.popup_0327E370_50C9_880A_4197_D1986B274A6E",
 {
  "id": "ImageResource_47E300D6_5062_8735_41B0_46C730EED362",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_0327E370_50C9_880A_4197_D1986B274A6E_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_0327E370_50C9_880A_4197_D1986B274A6E_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_0327E370_50C9_880A_4197_D1986B274A6E_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_0327E370_50C9_880A_4197_D1986B274A6E_0_3.jpg"
   }
  ]
 },
 "this.popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE",
 {
  "id": "ImageResource_47E390D7_5062_8733_41D3_D5B5D084F5CB",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_036D5CA5_50C8_980A_41CF_D8D8C98B1FAE_0_3.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5E7EF7AF_52BE_6687_41D4_A684CABC177C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 20.44,
     "targetPitch": -1.19,
     "easing": "cubic_in_out",
     "targetYaw": 111.34,
     "yawSpeed": 40.06
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 10)",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5E6D57CC_52BE_6689_41CE_A2FFC51680AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 6.68,
     "targetPitch": -10.32,
     "easing": "cubic_in_out",
     "targetYaw": 155.54,
     "yawSpeed": 12.41
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 12)",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5E5C17E2_52BE_66B9_41AF_54EC297FBC58",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 1.44,
     "targetPitch": -2.82,
     "easing": "linear",
     "targetYaw": 130.11,
     "yawSpeed": 1.88
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3)",
     "pitchSpeed": 22.4,
     "targetPitch": -1.18,
     "easing": "cubic_in_out",
     "targetYaw": -137.72,
     "yawSpeed": 44
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5E4E17FF_52BE_6687_41BE_D510C3760DB5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 2.83,
     "targetPitch": -10.32,
     "easing": "cubic_in_out",
     "targetYaw": 155.54,
     "yawSpeed": 4.68
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": -174.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -11.55,
     "easing": "cubic_in_out",
     "targetYaw": -141.91,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -5.01,
     "easing": "cubic_in_out",
     "targetYaw": -121.16,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.77,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 12)",
     "pitchSpeed": 9.56,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.83,
     "yawSpeed": 18.2
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5FB1B81B_52BE_698F_41C0_F3574F2B6136",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 67.52,
     "targetPitch": -22.61,
     "easing": "cubic_in_out",
     "targetYaw": 146.25,
     "yawSpeed": 134.66
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5F9CD833_52BE_699F_4190_86D5244D62C3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 23.38,
     "targetPitch": -6.21,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 45.96
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 11)",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5FF8C84A_52BE_6989_41AE_4F259E76352C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -6.12,
     "easing": "cubic_in_out",
     "targetYaw": 14.65,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 7.45,
     "easing": "cubic_in_out",
     "targetYaw": 131.45,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5FE3885C_52BE_6989_4196_78749B234B02",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 14.73,
     "targetPitch": -17.19,
     "easing": "cubic_in_out",
     "targetYaw": -143.38,
     "yawSpeed": 28.6
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5FC0A86F_52BE_6987_41CC_6516EB182EF6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 4.08,
     "targetPitch": -17.19,
     "easing": "cubic_in_out",
     "targetYaw": -143.38,
     "yawSpeed": 7.18
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.25,
     "easing": "cubic_in_out",
     "targetYaw": 129.44,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 11.7,
     "targetPitch": -1.53,
     "easing": "cubic_in_out",
     "targetYaw": 86.03,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_596D6899_52BE_6A8B_41C2_5463A14312B0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 36.61,
     "targetPitch": -1.19,
     "easing": "cubic_in_out",
     "targetYaw": 111.34,
     "yawSpeed": 72.55
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -2.48,
     "easing": "cubic_in_out",
     "targetYaw": 171.02,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 10)",
     "pitchSpeed": 17.05,
     "targetPitch": -4.14,
     "easing": "cubic_in_out",
     "targetYaw": -143.83,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_596538AB_52BE_6A8F_41D1_9E6122FB811A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.67,
     "targetPitch": -22.61,
     "easing": "cubic_in_out",
     "targetYaw": 146.25,
     "yawSpeed": 34.49
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -9.72,
     "easing": "cubic_in_out",
     "targetYaw": 109.66,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.56,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 99.81,
     "yawSpeed": 18.2
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": 63.28,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 6.8,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5950B8BD_52BE_6A8B_41D1_01D35C1BD88F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 33.12,
     "targetPitch": -11.51,
     "easing": "cubic_in_out",
     "targetYaw": 42.81,
     "yawSpeed": 65.54
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 7)",
     "pitchSpeed": 11.7,
     "targetPitch": -1.35,
     "easing": "cubic_in_out",
     "targetYaw": -26.5,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_594AB8CF_52BE_6A87_41A4_9632B873255A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 36.59,
     "targetPitch": -28.38,
     "easing": "cubic_in_out",
     "targetYaw": 45.58,
     "yawSpeed": 72.51
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 10.63,
     "targetPitch": -7.98,
     "easing": "cubic_in_out",
     "targetYaw": 74.7,
     "yawSpeed": 20.35
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 10.63,
     "targetPitch": -6.49,
     "easing": "cubic_in_out",
     "targetYaw": 125.43,
     "yawSpeed": 20.35
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 7.42,
     "targetPitch": -10.94,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 13.9
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_594528E1_52BE_6ABB_41D0_A9519ECB59D2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 98.06,
     "targetPitch": -6.21,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 196.02
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -105.73,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 11.7,
     "targetPitch": -5.45,
     "easing": "cubic_in_out",
     "targetYaw": -85.95,
     "yawSpeed": 22.5
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 8.49,
     "targetPitch": -8.93,
     "easing": "cubic_in_out",
     "targetYaw": -75.23,
     "yawSpeed": 16.05
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 11)",
     "pitchSpeed": 11.7,
     "targetPitch": -11.99,
     "easing": "cubic_in_out",
     "targetYaw": -61.71,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBB48EA_52BE_6A89_41CD_529C52429E35",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7E316332_51AF_2B2D_419B_C1E4901A999F",
 {
  "id": "effect_02ADF2E8_5065_8B1D_41C6_BD85492FB9D2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02ADF2E8_5065_8B1D_41C6_BD85492FB9D2",
 {
  "id": "effect_5EBB28EA_52BE_6A89_41CA_CF8A110E00E6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBB38EB_52BE_6A8F_4131_D522DC604690",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7E309333_51AF_2B13_41C7_2F13138DBABC",
 {
  "id": "effect_02AD42E8_5065_8B1D_4166_5D27B343E830",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02AD42E8_5065_8B1D_4166_5D27B343E830",
 {
  "id": "effect_5EBB08EB_52BE_6A8F_41C0_7C60BF0C5744",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40DF16C5_5161_6D76_41CE_23717A708B39",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40DF66C6_5161_6D75_4191_1EB238710CC7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40DF46C6_5161_6D75_4178_022F57B6BB96",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40DFB6C6_5161_6D75_4100_CA059BCAE420",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C285B3E_51A2_9975_41D2_BF356E9E6FF5",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C286B3E_51A2_9975_41C0_005CB61B26B7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02AD82EA_5065_8B1D_41BB_A790737A5F2B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02ADB2EB_5065_8B13_41C8_6FDF308C307F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C287B3E_51A2_9972_41B7_656605B0E8B4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2A3BF3_5161_7B13_41C8_BD6DC8221933",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02AA32EA_5065_8B1D_41D3_7CCD4EFB78A2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02ADF2EA_5065_8B1D_41D2_CEA58E6CE320",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_386801D4_51E2_8935_417D_BAC8BBA751DE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2AABF4_5161_7B15_41D3_D6AE4A0ECFC1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2ABBF4_5161_7B15_41C5_B9136ACE46A5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2A8BF4_5161_7B15_41D4_11BB99605814",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCE8EC_52BE_6A89_41C5_9B53B6575EA2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7D08104C_51A1_2575_41B6_6337FC1F9382",
 {
  "id": "effect_77794990_5161_67ED_41B0_94BBED414FC4",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777EB990_5161_67ED_41A9_907A812EB140",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_4C3D4A8B_5161_25F3_41C3_4B9594B0BE8F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777EA990_5161_67EE_41C3_34CC041F734E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "class": "SlideInEffect",
  "easing": "cubic_out",
  "from": "left",
  "duration": 1000
 },
 {
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8C0876_400D_056C_4197_4D21DD837174",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8C0876_400D_056C_4197_4D21DD837174",
 {
  "id": "effect_5EBC38EC_52BE_6A8A_41D2_58375B0F5262",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8C2877_400D_056D_41A8_5F85BCABA018",
 {
  "id": "effect_5EBC08ED_52BE_6A8B_41D2_F77A9E62F757",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_5EBC18ED_52BE_6A8B_4196_FA3C4EA6E2C2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_5EBDE8ED_52BE_6A8A_41B9_A9FD534ECCEF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5C8CB878_400D_0563_41C1_590C1BFEAD69",
 {
  "id": "effect_5EBDF8EE_52BE_6A89_41CE_16CB4ECA9A1C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_5EBB48EE_52BE_6A89_41D2_B7C236B9A95E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_5EBB58EF_52BE_6A87_41C2_B42456D47A07",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_5EBB28EF_52BE_6A87_41CC_FC2FEC7FF6D0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_5EBB38EF_52BE_6A87_41CC_36354748A5C4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7646B174_4217_6060_41B9_177997DC3A13",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBB08F0_52BE_6A99_41CE_EC4A49AA18D3",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7646B174_4217_6060_41B9_177997DC3A13",
 {
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_4C3F9A90_5161_25ED_41CA_C5B4E91434E4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02AE32EF_5065_8B13_41CC_5B661BAA48A8",
 {
  "id": "effect_5EBB18F0_52BE_6A99_41B2_564316F4A2A3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCE8F0_52BE_6A99_41CD_DE105DAFF75F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCF8F1_52BE_6A9B_41C5_2053D8A90BA2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCC8F1_52BE_6A9B_418F_4FF8E4AA235A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCD8F1_52BE_6A9A_41AB_B7C69F359CAD",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7B920785_51A1_2BF7_41C5_D136CE1F305D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBC58F2_52BE_6A99_41CC_4A1E0932B37D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7B920785_51A1_2BF7_41C5_D136CE1F305D",
 {
  "id": "effect_7B923785_51A1_2BF7_41B8_43C104024EDA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBC38F3_52BE_6A9F_41C8_BCBA4DCB3F54",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7B923785_51A1_2BF7_41B8_43C104024EDA",
 {
  "id": "effect_02B3C2F1_5065_8B0F_41CA_E4E92C846DA9",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02B3C2F1_5065_8B0F_41CA_E4E92C846DA9",
 {
  "id": "effect_5EBC08F3_52BE_6A9F_41CB_E0EAF1F05780",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7E3AF33C_51AF_2B15_41B2_27E4CB2A5FF3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBDE8F3_52BE_6A9F_41C3_AABA19E26EF9",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7E3AF33C_51AF_2B15_41B2_27E4CB2A5FF3",
 {
  "id": "effect_02B162F2_5065_8B0D_41D0_46EF00D464D1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02B162F2_5065_8B0D_41D0_46EF00D464D1",
 {
  "id": "effect_5EBDC8F4_52BE_6A99_41BB_238B211A5856",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40D3F6D3_5161_6D13_41D2_2C692CF41E38",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40D3C6D3_5161_6D13_41A3_F2A715D4D9B6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40D016D3_5161_6D13_41D3_CA853C79A3F9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40D066D3_5161_6D13_41D0_5AF62796F130",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C29BBFC_5161_7B15_41BB_84BB0F959C3F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C299BFC_5161_7B15_41CC_B251707AAB35",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B062F3_5065_88F2_41CC_381B81A954A2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B012F4_5065_88F5_41D0_FE81353B06C6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C299B47_51A2_9913_41D1_032BF92982D7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3C299B47_51A2_9913_41D1_032BF92982D7",
 {
  "id": "effect_5EBDD8F4_52BE_6A99_41D4_047F4B383F2C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B0B2F3_5065_88F3_41C3_5BDE47852535",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B052F3_5065_88F3_41CC_E3D343A1A522",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_386BC1DB_51E2_8933_41CE_6A56EC13056A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C29CB48_51A2_991D_41B1_7D8BB999ACB6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2E1BFD_5161_7B17_41B3_3D79B9191519",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C2E6BFD_5161_7B17_41AF_3BB32198CBD6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7D0D9055_51A1_2517_41C1_FE837C86DD98",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBDA8F5_52BE_6A9B_41D1_1AAD6ED91016",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7D0D9055_51A1_2517_41C1_FE837C86DD98",
 {
  "id": "effect_777F8998_5161_671D_41D0_1D2F3D530961",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777FF999_5161_671F_41BB_97ACFB3DCF17",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_4C224A94_5161_2515_41D2_B98015408EA3",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777FE999_5161_671F_41B5_6817F1B3835C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71AE157E_4211_A060_41C1_A6FA728B9FF8",
 {
  "id": "effect_5EBDB8F5_52BE_6A9B_41C7_FDBC4633BF40",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_5EBD88F6_52BE_6A99_41D1_D423D46421B3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CFC3C8C_4232_A0A1_4198_B405D8F24CB7",
 {
  "id": "effect_5EBD98F6_52BE_6A99_41C5_D6FAB4698F9E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7274D1DE_4FC9_8836_41CB_C35126518752",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7274D1DE_4FC9_8836_41CB_C35126518752",
 {
  "id": "effect_5EBD68F6_52BE_6A99_4199_609362114FD1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_727441DF_4FC9_8836_41CC_0D0B18042478",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_727441DF_4FC9_8836_41CC_0D0B18042478",
 {
  "id": "effect_5EBD78F7_52BE_6A87_41D3_E67D65DEB595",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
  "class": "SlideInEffect",
  "easing": "cubic_out",
  "from": "top",
  "duration": 1000
 },
 "this.effect_6E6DDC4B_4272_E7A0_41C7_5048D0BE34B9",
 {
  "id": "effect_5EBD28F7_52BE_6A87_41CE_B76E66727278",
  "class": "SlideOutEffect",
  "easing": "cubic_out",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBCA8F7_52BE_6A86_41C1_DB5B9310453D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBC88F8_52BE_6A89_41D0_89BBE81E61A2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBC78F8_52BE_6A89_41C4_EFBC7D3F782F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B18581_4211_A0A0_41C4_C43629A7BC76",
 {
  "id": "effect_5EBC48F9_52BE_6A8B_41D4_405A0FFC2793",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_5EBC58F9_52BE_6A8B_41CB_67FE0ECCF03E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBC08FA_52BE_6A89_41D3_8FCA57BFF02F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "id": "effect_71B0E584_4211_A0A1_41C9_43847D46138C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B0E584_4211_A0A1_41C9_43847D46138C",
 {
  "id": "effect_5EBDE8FA_52BE_6A89_41D0_1E07556F6C32",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "id": "effect_5EBDF8FA_52BE_6A89_41D4_443F6EA9C514",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBDC8FB_52BE_6A8F_41BA_12F4CF694554",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBDA8FB_52BE_6A8F_41B6_1573EF930D77",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBD88FB_52BE_6A8F_41BE_EA311C77DEC2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "id": "effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CE0DC93_4232_A0A0_41B9_FD0551C24AD5",
 {
  "id": "effect_5EBD98FC_52BE_6A89_4168_A54830EF38A1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726861E4_4FC9_880A_41B3_661275BA1317",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726861E4_4FC9_880A_41B3_661275BA1317",
 {
  "id": "effect_5EBD48FC_52BE_6A89_41C2_6ADA9FF9392C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7269E1E5_4FC9_880A_41BA_3D5DD30BE06D",
 {
  "id": "effect_5EBD28FC_52BE_6A89_41A8_D1DB4CC85216",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_09C2DBC5_2FAE_5D9E_41A9_065ECAF2AF19",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_31459F67_2FAE_D69A_4164_37DF78EF38D3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBD08FD_52BE_6A8B_41A4_97CBDCEBC319",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBD18FD_52BE_6A8B_41D0_3CA5FF6893CB",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBEE8FD_52BE_6A8B_41A8_B9D1B047A9B2",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "id": "effect_7B9E4791_51A1_2BEF_41AE_E1F81ED9998E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBEB8FE_52BE_6A89_41C3_62C4E3F8EC5B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7B9E4791_51A1_2BEF_41AE_E1F81ED9998E",
 {
  "id": "effect_7B9E7791_51A1_2BEF_41BD_EA361866B801",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBE98FE_52BE_6A89_41C9_CDD719AAE04A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7B9E7791_51A1_2BEF_41BD_EA361866B801",
 {
  "id": "effect_02B982FD_5065_88F7_41CF_6D2CD804790B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02B982FD_5065_88F7_41CF_6D2CD804790B",
 {
  "id": "effect_5EBE68FF_52BE_6A87_4181_2B63E5C277E0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7E41D349_51AF_2B7F_41A2_884BFF2E2B38",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBE78FF_52BE_6A87_41B1_D253FD880DE5",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7E41D349_51AF_2B7F_41A2_884BFF2E2B38",
 {
  "id": "effect_02B972FE_5065_88F5_41B7_D367210DDBB0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_02B972FE_5065_88F5_41B7_D367210DDBB0",
 {
  "id": "effect_5EBE58FF_52BE_6A87_41B7_99EF28623322",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40AAD6DF_5161_6D13_418B_D3B4081FF466",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40AB26DF_5161_6D13_4176_42601A3A3E20",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40AB06DF_5161_6D13_41C7_F847E26233E7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_40AB66DF_5161_6D13_41C1_2796437DB5B0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C29FB52_51A2_990D_41D3_55BF0471F60A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C322C08_5161_7CFD_41C5_697F34AC7E0D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B80300_5065_890D_41B7_E5F0EE7E2AAC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B82300_5065_890D_41D1_BC8C23F56CC0",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C2A1B53_51A2_9933_41A8_ECCE344121CA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C2A2B53_51A2_9933_41D0_CDCA740EBB36",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B8B2FF_5065_88F2_419E_0B34EA58085D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_02B85300_5065_890D_41CD_E00AC7BFB434",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_386CF1E6_51E2_8915_41C2_EDFAB9CBF4DA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3C2A3B54_51A2_9935_41BA_67C998C96B22",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C327C08_5161_7CFD_41B1_7E4E2B3963E5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5C324C09_5161_7CFF_41BE_B68B56059BFF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7D041061_51A1_252F_41B9_5238EB80AB51",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBE0900_52BE_6B79_419A_A58927725068",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7D041061_51A1_252F_41B9_5238EB80AB51",
 {
  "id": "effect_777F79A3_5161_6732_41BD_5EA6A4C46C8A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777F69A4_5161_6735_41D1_7AF8BC987709",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_4C296A9E_5161_2512_41BB_79D1D849D858",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_777F59A4_5161_6735_41CC_87CDD9A7CA65",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBFF901_52BE_6B7B_41AF_32A1351CB79B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726B41E9_4FC9_881A_41C1_5CBE79CAE174",
 {
  "id": "effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B1A588_4211_A0A1_41C3_CBB8DE955D82",
 {
  "id": "effect_5EBFD901_52BE_6B7B_41AA_1435B27D8D3F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_5EBFB901_52BE_6B7B_41C2_9BC027BC095D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CE05C95_4232_A0A0_418B_A9B5C6046C60",
 {
  "id": "effect_5EBD3902_52BE_6B79_41C2_D669A6638B1B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726C61EB_4FC9_881E_41D1_58E533222243",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726C61EB_4FC9_881E_41D1_58E533222243",
 {
  "id": "effect_5EBD0902_52BE_6B79_41C6_859CEA491973",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726DD1EB_4FC9_881E_418F_866B7958A526",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726DD1EB_4FC9_881E_418F_866B7958A526",
 {
  "id": "effect_5EBEE902_52BE_6B7E_41BD_C20B1910A4A6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
  "class": "SlideInEffect",
  "easing": "cubic_out",
  "from": "top",
  "duration": 1000
 },
 "this.effect_6E562C55_4272_E7A0_41CC_0ED70CE160C3",
 {
  "id": "effect_5EBEF903_52BE_6B7F_41D3_DF1F30866851",
  "class": "SlideOutEffect",
  "easing": "cubic_out",
  "to": "top",
  "duration": 1000
 },
 {
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_5EBEC903_52BE_6B7F_4187_13BE7C52DE5F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B1258A_4211_A0A0_4180_984D30BC8BF8",
 {
  "id": "effect_5EBE8904_52BE_6B79_41C4_F45FCD8081B6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_5EBE9904_52BE_6B79_41C9_3116401508E4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBE5905_52BE_6B7B_41B6_3E351C392A4A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726FF1ED_4FC9_881A_41D3_46E1C42560D7",
 {
  "id": "effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B0F58C_4211_A0A0_41AB_6FC57BF9CE23",
 {
  "id": "effect_5EBE3905_52BE_6B7B_41C2_5A778D956DBA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "id": "effect_5EBFE905_52BE_6B7B_41C8_215085B80281",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBFF906_52BE_6B79_41B1_4572DDAB053F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_0A8D711D_2FA6_4AA9_41B3_1698FA0FACCA",
 {
  "id": "effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CE7AC97_4232_A0A0_41BD_683EA2897E03",
 {
  "id": "effect_5EBFC906_52BE_6B79_41C0_78D80D7BD20B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726F91EF_4FC9_8815_41C6_FEB96EF4ED62",
 {
  "id": "effect_5EBFA906_52BE_6B79_41C7_1CAFB439E0D2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726FC1F0_4FC9_880A_41CE_1908D478796F",
 {
  "id": "effect_5EBFB907_52BE_6B87_41BC_EAF30EE4EBC7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "id": "effect_5EBF8907_52BE_6B87_41D3_A9929F5A505C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726051F1_4FC9_880A_41D1_6185001C10DB",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBF7908_52BE_6B89_41D4_39051CF7206A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726051F1_4FC9_880A_41D1_6185001C10DB",
 {
  "id": "effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B1F58E_4211_A0A0_4193_15907AE6E948",
 {
  "id": "effect_5EBF5908_52BE_6B89_41A8_C5C28DDF7E29",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "id": "effect_5EBF2909_52BE_6B8B_418C_35ADD397C1CE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBF0909_52BE_6B8B_41B9_A30F0E46A59D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_0A8BD120_2FA6_4A96_41A2_A9BE1252574A",
 {
  "id": "effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CE5CC9A_4232_A0A0_41C9_BFE43E88A8F1",
 {
  "id": "effect_5EB0C909_52BE_6B8B_41BF_DA223AFECBDF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7262A1F3_4FC9_880E_41C3_259FDFF86250",
 {
  "id": "effect_5EB0A909_52BE_6B8A_41C5_5660BA7DB70D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7262E1F4_4FC9_880A_41D1_55FAFDDF5D8C",
 {
  "id": "effect_5EB0890A_52BE_6B89_41AD_6ACA2BA45EBE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "id": "effect_5EB0690A_52BE_6B89_41CD_E8038B58567F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726311F5_4FC9_880A_41B4_030414259793",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EB0590B_52BE_6B8F_41C9_914F65CF5CEA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726311F5_4FC9_880A_41B4_030414259793",
 {
  "id": "effect_71B11592_4211_A0A0_41CE_905A6104BD57",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B11592_4211_A0A0_41CE_905A6104BD57",
 {
  "id": "effect_5EBFA90B_52BE_6B8F_41BF_470C659E9AE8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CE4FC9B_4232_A0A0_41C7_BEB34AD7E39A",
 {
  "id": "effect_5EBF890C_52BE_6B89_41CC_E98BC5D6DC8A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7264C1F6_4FC9_8BF6_41D3_3406BD33533A",
 {
  "id": "effect_5EBF990C_52BE_6B89_41C7_8FE9CC2692F5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726461F7_4FC9_8BF6_41C5_73FA0E92B63A",
 {
  "id": "effect_5EBF790C_52BE_6B89_419D_558FA13904B7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EBF290D_52BE_6B8B_41BB_95CE736D7E75",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726431F8_4FC9_8BFA_41CA_55EA2BE0E8C6",
 {
  "id": "effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B0F593_4211_A0A0_418E_AFD082FA622B",
 {
  "id": "effect_5EBF090D_52BE_6B8B_41AD_A0293838AB7C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CEB9C9D_4232_A0A0_4182_47BCA14283F7",
 {
  "id": "effect_5EBF190E_52BE_6B89_41D0_FF0CC3CA8F15",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726591F9_4FC9_8BFA_41AD_697A944F3807",
 {
  "id": "effect_5EB0C90E_52BE_6B89_41A5_B786A9118BC4",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7265C1FA_4FC9_8BFE_41D0_249438D9ACE6",
 {
  "id": "effect_5EB0A90E_52BE_6B89_41B0_02179B39240C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "id": "effect_5EB0B90F_52BE_6B87_41D1_A960CCD121DB",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EB0690F_52BE_6B87_41C2_5997716B9C70",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726651FB_4FC9_8BFE_41B0_507650F7FA47",
 {
  "id": "effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B06595_4211_A0A0_41AF_5A05C1CE96AC",
 {
  "id": "effect_5EB05910_52BE_6B99_41BE_32A30500FFD1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CEB3C9F_4232_A0A0_419A_6B51F183C876",
 {
  "id": "effect_5EB03910_52BE_6B99_41A0_82D1CB275CED",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726711FC_4FC9_8BFA_41B4_84CA982A4B68",
 {
  "id": "effect_5EB01910_52BE_6B99_41B4_D84B76BC7A0E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_726751FD_4FC9_8BFA_41CC_B39E07B66A99",
 {
  "id": "effect_5EB1C911_52BE_6B9B_41A4_0450270AE13B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "id": "effect_5EB1A911_52BE_6B9B_41D3_FED801305A93",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5EB13912_52BE_6B99_41B0_0D4BFD3AF843",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7259D1FE_4FC9_8BF6_41CF_DB27A5C12535",
 {
  "id": "effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_71B38597_4211_A0A0_4180_89B4D6D90C2E",
 {
  "id": "effect_5EB11912_52BE_6B99_41D4_9E01D6F4C20C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_5CEAFCA0_4232_A0E1_41C6_589373582369",
 {
  "id": "effect_5EB2A913_52BE_6B9F_41C2_BC31DC76ED8D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_725A91FF_4FC9_8BF5_41B7_502D2AAEEB51",
 {
  "id": "effect_5EB28913_52BE_6B9F_41A8_B4017859205C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_725AE200_4FC9_880A_41AA_CF59DBED9A80",
 {
  "id": "effect_5EB26913_52BE_6B9F_41BF_4D8AE5378931",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "id": "effect_5EB25914_52BE_6B99_41C8_3919DC6A54D8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": true,
  "id": "video_763ECAF9_51F1_13D6_417F_A7341F095AAF",
  "height": 1080,
  "thumbnailUrl": "media/video_763ECAF9_51F1_13D6_417F_A7341F095AAF_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg",
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3"
  },
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "autoplay": true
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_5E3DF428_52B6_9989_41D2_E9609E10CB56.mp4",
   "height": 1080,
   "width": 1920,
   "webmUrl": "media/video_5E3DF428_52B6_9989_41D2_E9609E10CB56.webm"
  },
  "label": "intro video",
  "width": 1920,
  "loop": false,
  "id": "video_5E3DF428_52B6_9989_41D2_E9609E10CB56",
  "height": 1080,
  "thumbnailUrl": "media/video_5E3DF428_52B6_9989_41D2_E9609E10CB56_t.jpg",
  "scaleMode": "fit_inside"
 }
], "children": [
 {
  "progressLeft": 0,
  "playbackBarProgressOpacity": 0,
  "progressBackgroundOpacity": 0,
  "playbackBarBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "toolTipShadowColor": "#333333",
  "playbackBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundOpacity": 0,
  "progressBarOpacity": 0,
  "playbackBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#0066B3",
   "#6BA13C"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 0,
  "toolTipFontSize": 12,
  "progressHeight": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColor": [
   "#0066B3",
   "#71A348"
  ],
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarHeight": 0,
  "minHeight": 50,
  "borderSize": 0,
  "height": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "paddingBottom": 0,
  "progressBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "progressRight": 0,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarLeft": 0,
  "top": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "horizontal",
  "toolTipOpacity": 1,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowOpacity": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipPaddingRight": 6,
  "transitionMode": "fade_out_fade_in",
  "progressBarBorderColor": "#000000",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 0,
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "backgroundOpacity": 1,
  "bottom": "0%",
  "shadowBlurRadius": 6,
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "scrollBarMargin": 2,
  "maxWidth": 500,
  "scrollBarVisible": "rollOver",
  "maxHeight": 2000,
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "shadow": true,
  "scrollBarWidth": 10,
  "contentOpaque": false,
  "visible": false,
  "shadowHorizontalLength": 7,
  "horizontalAlign": "center",
  "shadowVerticalLength": 0,
  "class": "Container",
  "backgroundColorDirection": "horizontal",
  "paddingLeft": 0,
  "shadowSpread": 1,
  "children": [
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "right",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
      "maxWidth": 100,
      "maxHeight": 50,
      "shadow": false,
      "horizontalAlign": "right",
      "class": "Image",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": 50,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
      "paddingBottom": 0,
      "borderRadius": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "5.423%",
    "borderRadius": 0,
    "paddingRight": 10,
    "layout": "horizontal",
    "gap": 10,
    "paddingBottom": 0
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
      "maxWidth": 1000,
      "maxHeight": 1000,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "16.157%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "vertical",
    "gap": 0,
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0,
    "id": "Image_227442D1_2F53_0813_41B3_7271F7D70452",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 5,
    "width": "87.681%",
    "minHeight": 5,
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": "13.558%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_227442D1_2F53_0813_41B3_7271F7D70452.png",
    "paddingBottom": 0
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_6071FB50_4190_1376_417C_4B895D2ED536",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "maxHeight": 500,
    "maxWidth": 500,
    "shadow": false,
    "scrollBarWidth": 10,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_62015550_4190_F776_41BA_A0A2769275B2",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4",
        "maxWidth": 386,
        "maxHeight": 276,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4973D6BD_51D1_324E_41C0_AE2C94232344, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_50BC88D7_41F1_A0A0_41C2_DFCE679DE04B, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62D15ACC_4190_3D6E_41CA_B73B93854AF4.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63BC1E1B_4190_14EA_41CB_DE2C9D195E30",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": true,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_4816F7BE_51D1_124A_41BA_7B4660D3C5D1, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_6D7BCD74_41B0_373F_41C7_FB9965B99C07, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6067E60E_4190_14EA_41B7_6985D6BCDEC5.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "57.971%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "10%",
    "paddingRight": 0,
    "layout": "horizontal",
    "gap": 10,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_606C4E88_4190_15D6_4193_D28A5B1565CB",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63D816B2_4190_153A_41C3_FEEA477D765F",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A",
        "maxWidth": 218,
        "maxHeight": 344,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, null, null, false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, null, null, false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, null, null, false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510D3286_41F6_E0A0_41B7_0837F6E6C079, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "70%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_63BEA363_41B0_135A_41BA_22AFB65D8B4A.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_629A266C_4190_352E_419F_7EF6B41B99EA",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62DA2260_41B0_6D56_41D0_0BF353C4C127",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_49156269_51D3_12F6_41D4_4641DC2CB11A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_510A6C97_41F1_A0A0_41C6_75677DDAAB42, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "100%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62DA2260_41B0_6D56_41D0_0BF353C4C127.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "9.778%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "horizontal",
    "gap": 10,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "backgroundOpacity": 0.2,
    "id": "Container_60B39755_41F0_137E_41C0_0E6E0B2353C9",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#000000",
     "#666666"
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": true,
    "horizontalAlign": "center",
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_63F3509D_41B0_2DEE_41AE_6EB7468FDF1C",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE",
        "maxWidth": 1095,
        "maxHeight": 1095,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F766399_51D7_3256_41C8_8058BFACBDFC, 'hideEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_57E45C73_4F2F_1F2F_41D0_D80D434D627C, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "80%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_62C990B6_41B3_ED3A_41CA_9542F80D37EE.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_62EF46AC_41B0_352E_41C3_470A9C137921",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_6331E052_41B0_2D7A_4195_B0D655B92177",
        "maxWidth": 759,
        "maxHeight": 133,
        "shadow": false,
        "horizontalAlign": "center",
        "class": "Image",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5, false, 0, this.effect_5F7E6C20_51D1_3677_41A7_5A242A038A1A, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false); this.setComponentVisibility(this.Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769, true, 0, this.effect_58318646_4F2F_2B69_41AC_962A6ED82AEE, 'showEffect', false)",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "99.75%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6331E052_41B0_2D7A_4195_B0D655B92177.png",
        "paddingBottom": 0,
        "left": "0%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "58.14%",
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "absolute",
      "gap": 10,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "99.71%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "height": "9.778%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "horizontal",
    "gap": 0,
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 20,
      "width": "15%",
      "minHeight": 20,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "22%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 84,
    "minWidth": 5,
    "width": "100%",
    "minHeight": 5,
    "verticalAlign": "bottom",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "30.567%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "horizontal",
    "gap": 35,
    "paddingBottom": 30
   }
  ],
  "shadowOpacity": 0.4,
  "minHeight": 100,
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 100,
  "verticalAlign": "top",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "paddingRight": 0,
  "layout": "vertical",
  "gap": 10,
  "shadowColor": "#000000",
  "paddingBottom": 0,
  "left": "0%",
  "right": "83%",
  "scrollBarOpacity": 0,
  "top": "0%"
 },
 {
  "toolTipShadowBlurRadius": 3,
  "backgroundOpacity": 0,
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "maxWidth": 500,
  "toolTipOpacity": 1,
  "maxHeight": 500,
  "shadow": false,
  "toolTipBorderSize": 1,
  "toolTipShadowColor": "#333333",
  "visible": false,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingTop": 4,
  "toolTipTextShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "class": "Image",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipFontSize": 12,
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_77D4607B_4271_6060_41A3_CF43634A36B0, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, 0, this.effect_74D59241_4213_63A0_41CB_DA1C684AF71F, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false); this.setComponentVisibility(this.Container_3E49C507_2F75_BB3A_41C0_E3EAEF819AD0, true, 0, null, null, false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, 0, null, null, false)",
  "toolTipBorderRadius": 3,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#FFFFFF",
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "paddingTop": 0,
  "minWidth": 100,
  "width": "10%",
  "minHeight": 100,
  "verticalAlign": "middle",
  "borderSize": 0,
  "toolTip": "Menu",
  "toolTipBorderColor": "#767676",
  "height": "10%",
  "toolTipFontWeight": "normal",
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowOpacity": 1,
  "borderRadius": 0,
  "left": "2%",
  "toolTipTextShadowColor": "#000000",
  "top": "3%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "0%",
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "contentOpaque": false,
  "horizontalAlign": "center",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundOpacity": 0.75,
    "bottom": "7.65%",
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#006CB5",
     "#71A348"
    ],
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": false,
    "visible": false,
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "children": [
     {
      "backgroundOpacity": 1,
      "id": "Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F",
      "scrollBarMargin": 2,
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "backgroundColorDirection": "horizontal",
      "paddingLeft": 0,
      "children": [
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "id": "Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_33470F48_2F93_8736_41C7_C471F2C7FF7C",
          "maxWidth": 1753,
          "maxHeight": 133,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "paddingTop": 0,
          "minWidth": 1,
          "width": "95.278%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_33470F48_2F93_8736_41C7_C471F2C7FF7C.png",
          "paddingBottom": 0,
          "left": "2.26%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "84.581%",
        "minHeight": 1,
        "verticalAlign": "top",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "layout": "absolute",
        "gap": 10,
        "paddingBottom": 0
       },
       {
        "scrollBarMargin": 2,
        "backgroundOpacity": 0,
        "id": "Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "center",
        "class": "Container",
        "paddingLeft": 0,
        "children": [
         {
          "toolTipShadowBlurRadius": 3,
          "backgroundOpacity": 0,
          "id": "Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D",
          "maxWidth": 100,
          "toolTipOpacity": 1,
          "maxHeight": 100,
          "shadow": false,
          "toolTipBorderSize": 1,
          "toolTipShadowColor": "#333333",
          "toolTipTextShadowOpacity": 0,
          "toolTipPaddingTop": 4,
          "toolTipTextShadowBlurRadius": 3,
          "horizontalAlign": "center",
          "toolTipShadowHorizontalLength": 0,
          "toolTipFontFamily": "Arial",
          "class": "Image",
          "paddingLeft": 0,
          "toolTipPaddingBottom": 4,
          "toolTipFontStyle": "normal",
          "toolTipFontSize": 12,
          "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, this.effect_15430EDE_505D_7B35_41CA_3F5C176FC215, 'hideEffect', false)",
          "toolTipShadowSpread": 0,
          "toolTipBackgroundColor": "#F6F6F6",
          "toolTipFontColor": "#606060",
          "toolTipPaddingLeft": 6,
          "toolTipPaddingRight": 6,
          "paddingTop": 0,
          "minWidth": 10,
          "width": "60%",
          "minHeight": 10,
          "verticalAlign": "middle",
          "borderSize": 0,
          "toolTip": "Close",
          "toolTipBorderColor": "#767676",
          "toolTipBorderRadius": 3,
          "height": "60%",
          "toolTipFontWeight": "normal",
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_1256AF34_50A3_7975_41CF_E4D5B01FA15D.png",
          "paddingBottom": 0,
          "toolTipShadowVerticalLength": 0,
          "toolTipShadowOpacity": 1,
          "borderRadius": 0,
          "toolTipTextShadowColor": "#000000"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "12.755%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "layout": "horizontal",
        "gap": 10,
        "paddingBottom": 0
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "height": "12.627%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 10,
      "paddingBottom": 0,
      "scrollBarOpacity": 0.5
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "87.324%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_5A0BFFF6_4F75_1916_41C8_C0192AF43769",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 20,
      "children": [
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5A65C06B_4F74_E73F_41D1_267D30DF1645",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 5,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 1)",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5928948A_4F57_6FF9_41B9_2F0112B06FDD.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "98%",
        "minHeight": 1,
        "verticalAlign": "top",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "borderRadius": 0,
        "paddingRight": 0,
        "layout": "absolute",
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_59F25950_4F6B_196A_41CD_F43855FE820E",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 2); this.MainViewerVideoPlayer.play()",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_596DA0A1_4F57_272B_41C1_5D7F44F03A84.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "98%",
        "minHeight": 1,
        "verticalAlign": "top",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "borderRadius": 0,
        "paddingRight": 0,
        "layout": "absolute",
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       },
       {
        "backgroundOpacity": 0.3,
        "id": "Container_5AEF7944_4F6B_1969_41C6_6A82DE99FA46",
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000",
         "#666666"
        ],
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "shadow": false,
        "contentOpaque": false,
        "horizontalAlign": "left",
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "children": [
         {
          "backgroundOpacity": 0,
          "id": "Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6",
          "maxWidth": 2245,
          "maxHeight": 474,
          "shadow": false,
          "horizontalAlign": "center",
          "class": "Image",
          "paddingLeft": 0,
          "click": "this.mainPlayList.set('selectedIndex', 5); this.MainViewerVideoPlayer.play()",
          "paddingTop": 0,
          "minWidth": 1,
          "width": "100%",
          "minHeight": 1,
          "verticalAlign": "middle",
          "borderSize": 0,
          "height": "100%",
          "borderRadius": 0,
          "paddingRight": 0,
          "scaleMode": "fit_inside",
          "url": "skin/Image_5A974EDD_4F57_FB1B_4174_06D927CA67A6.png",
          "paddingBottom": 0,
          "left": "0%",
          "top": "0%"
         }
        ],
        "scrollBarColor": "#000000",
        "overflow": "scroll",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "98%",
        "minHeight": 1,
        "verticalAlign": "top",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "height": "25%",
        "borderRadius": 0,
        "paddingRight": 0,
        "layout": "absolute",
        "gap": 10,
        "paddingBottom": 0,
        "scrollBarOpacity": 0.5
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 50,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "87.415%",
      "borderRadius": 0,
      "paddingRight": 20,
      "layout": "vertical",
      "gap": 10,
      "paddingBottom": 50
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "minHeight": 1,
    "paddingTop": 0,
    "minWidth": 1,
    "verticalAlign": "top",
    "borderSize": 0,
    "backgroundColorRatios": [
     0.02,
     1
    ],
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "vertical",
    "gap": 0,
    "paddingBottom": 0,
    "left": "14.65%",
    "right": "27.44%",
    "scrollBarOpacity": 0.5,
    "top": "28.31%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "2%",
    "id": "Container_619590BA_4005_05E7_41C3_8B4621024A56",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_647D2A27_403F_04ED_41B8_62A899DFCCD0",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "42.607%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_64F00B6B_403F_1B64_41C6_2E5278BB284E",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "overflow": "visible",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "46.498%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 10,
    "width": "13.207%",
    "minHeight": 10,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "9.128%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "horizontal",
    "gap": 10,
    "paddingBottom": 0,
    "right": "5%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "5%",
    "id": "Container_552C139E_41F7_60A0_41C0_6D7884D47FA7",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "contentOpaque": false,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 5,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_3B4D0B8C_51E2_9915_41CF_67764EFA9A3C",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       "this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B"
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 10,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_41E00F2C_5161_7B35_41C6_BC2399CBF863",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_41096450_516F_2D6D_41C6_3B86CF181E54",
        "maxWidth": 75,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipTextShadowBlurRadius": 3,
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "class": "IconButton",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 1,
        "width": "1023.36%",
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "toolTip": "Skip Video",
        "toolTipBorderColor": "#767676",
        "toolTipPaddingRight": 6,
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_41096450_516F_2D6D_41C6_3B86CF181E54.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "height": "100%",
        "transparencyActive": false,
        "paddingBottom": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipShadowOpacity": 1,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_3BFBC5CB_51DE_8913_41CF_321D91AD29E8",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E",
        "maxWidth": 75,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipTextShadowBlurRadius": 3,
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "class": "IconButton",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "100%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "toolTip": "Skip Video",
        "toolTipBorderColor": "#767676",
        "toolTipPaddingRight": 6,
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_4286ADC9_4FB1_28DD_41C0_41FC2344928E.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "height": "100%",
        "transparencyActive": true,
        "paddingBottom": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipShadowOpacity": 1,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_395C4B78_51E3_79FD_4190_8DD908FD8F27",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3",
        "maxWidth": 75,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipTextShadowBlurRadius": 3,
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "class": "IconButton",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "100%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "toolTip": "Skip Video",
        "toolTipBorderColor": "#767676",
        "toolTipPaddingRight": 6,
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_43E032BC_4FD9_887A_41C6_298272DA91E3.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "height": "100%",
        "transparencyActive": true,
        "paddingBottom": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipShadowOpacity": 1,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_6FD10198_4213_E0A0_41A7_C6C1ED586EA9",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8",
        "maxWidth": 80,
        "toolTipOpacity": 1,
        "mode": "push",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipTextShadowBlurRadius": 3,
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "class": "IconButton",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_3A4F5375_2FB7_BFDE_41C5_4DE04B99EA4F, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_334DBF2B_2FB5_874A_41C4_ECD88F770B9A, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Image_33470F48_2F93_8736_41C7_C471F2C7FF7C, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false); this.setComponentVisibility(this.Container_33AA400E_2FB5_F94A_41BC_EDBFBBF3A975, true, 0, this.effect_5DF89728_4233_E1E0_41BE_006FEAB9CB13, 'showEffect', false)",
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 55,
        "width": "100%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "toolTip": "Show labs list",
        "toolTipBorderColor": "#767676",
        "toolTipPaddingRight": 6,
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_57A8696E_421F_A060_41A2_E4CA55A6A0A8.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "height": "100%",
        "transparencyActive": true,
        "paddingBottom": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipShadowOpacity": 1,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     },
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "Container_6E17E57D_4213_6060_41A1_9148D02E3604",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "center",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "toolTipShadowBlurRadius": 3,
        "backgroundOpacity": 0,
        "id": "IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
        "maxWidth": 70,
        "toolTipOpacity": 1,
        "mode": "toggle",
        "maxHeight": 100,
        "shadow": false,
        "toolTipBorderSize": 1,
        "toolTipShadowColor": "#333333",
        "toolTipTextShadowOpacity": 0,
        "toolTipPaddingTop": 4,
        "toolTipTextShadowBlurRadius": 3,
        "horizontalAlign": "center",
        "toolTipShadowHorizontalLength": 0,
        "toolTipFontFamily": "Arial",
        "class": "IconButton",
        "paddingLeft": 0,
        "toolTipPaddingBottom": 4,
        "toolTipFontStyle": "normal",
        "toolTipFontSize": 12,
        "toolTipShadowSpread": 0,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontColor": "#606060",
        "toolTipPaddingLeft": 6,
        "cursor": "hand",
        "paddingTop": 0,
        "minWidth": 50,
        "width": "100%",
        "minHeight": 50,
        "verticalAlign": "middle",
        "borderSize": 0,
        "toolTip": "Mute",
        "toolTipBorderColor": "#767676",
        "toolTipPaddingRight": 6,
        "toolTipBorderRadius": 3,
        "iconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356.png",
        "toolTipFontWeight": "normal",
        "paddingRight": 0,
        "height": "100%",
        "pressedIconURL": "skin/IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356_pressed.png",
        "paddingBottom": 0,
        "toolTipShadowVerticalLength": 0,
        "toolTipShadowOpacity": 1,
        "transparencyActive": true,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "25%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "layout": "horizontal",
      "gap": 0,
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "visible",
    "paddingTop": 2,
    "minWidth": 1,
    "width": "35%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "10%",
    "borderRadius": 0,
    "paddingRight": 5,
    "layout": "horizontal",
    "gap": 10,
    "paddingBottom": 2,
    "right": "5%"
   },
   {
    "backgroundOpacity": 0,
    "id": "Container_6BEF11E1_4272_A060_41BE_1BAF95B0B5F5",
    "scrollBarMargin": 2,
    "maxWidth": 700,
    "scrollBarVisible": "rollOver",
    "maxHeight": 300,
    "scrollBarWidth": 10,
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
      "maxWidth": 700,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "minHeight": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
      "maxWidth": 700,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 50,
      "minHeight": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
      "maxWidth": 1705,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "bottom": "0%",
      "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
      "maxWidth": 1705,
      "maxHeight": 600,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "right": "0%",
      "top": "0%"
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "borderRadius": 0,
    "paddingRight": 0,
    "layout": "absolute",
    "gap": 0,
    "paddingBottom": 0,
    "right": "1%",
    "top": "1%"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "paddingTop": 0,
  "minWidth": 500,
  "width": "82.948%",
  "minHeight": 500,
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0,
  "height": "99.918%",
  "borderRadius": 0,
  "paddingRight": 0,
  "layout": "absolute",
  "gap": 10,
  "paddingBottom": 0,
  "right": "0%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "3%",
  "id": "Container_77D4607B_4271_6060_41A3_CF43634A36B0",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "contentOpaque": false,
  "visible": false,
  "horizontalAlign": "center",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "toolTipShadowBlurRadius": 3,
    "backgroundOpacity": 0,
    "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
    "maxWidth": 850,
    "toolTipOpacity": 1,
    "maxHeight": 850,
    "shadow": false,
    "toolTipBorderSize": 1,
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipTextShadowBlurRadius": 3,
    "horizontalAlign": "center",
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "class": "Image",
    "paddingLeft": 0,
    "toolTipPaddingBottom": 4,
    "toolTipFontStyle": "normal",
    "toolTipFontSize": 12,
    "click": "this.mainPlayList.set('selectedIndex', 1)",
    "toolTipShadowSpread": 0,
    "toolTipBackgroundColor": "#FFFFFF",
    "toolTipFontColor": "#606060",
    "toolTipPaddingLeft": 6,
    "toolTipPaddingRight": 6,
    "paddingTop": 0,
    "minWidth": 1,
    "width": "63.469%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "toolTip": "Home",
    "toolTipBorderColor": "#767676",
    "toolTipBorderRadius": 3,
    "height": "83%",
    "toolTipFontWeight": "normal",
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
    "paddingBottom": 0,
    "toolTipShadowVerticalLength": 0,
    "toolTipShadowOpacity": 1,
    "borderRadius": 0,
    "toolTipTextShadowColor": "#000000"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "11.834%",
  "minHeight": 1,
  "verticalAlign": "middle",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "height": "16.434%",
  "borderRadius": 0,
  "paddingRight": 0,
  "layout": "horizontal",
  "gap": 10,
  "paddingBottom": 0,
  "left": "3%"
 },
 {
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "shadow": false,
  "visible": false,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 1,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "shadow": false,
  "visible": false,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 0.3,
  "shadowBlurRadius": 6,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "textDecoration": "none",
  "mode": "push",
  "shadow": false,
  "iconHeight": 20,
  "visible": false,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "iconBeforeLabel": true,
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "iconLineWidth": 5,
  "shadowSpread": 1,
  "fontColor": "#FFFFFF",
  "fontWeight": "normal",
  "cursor": "hand",
  "paddingTop": 5,
  "minWidth": 0,
  "borderColor": "#000000",
  "minHeight": 0,
  "verticalAlign": "middle",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 5,
  "rollOverIconColor": "#666666",
  "gap": 5,
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "layout": "horizontal",
  "pressedIconColor": "#888888",
  "fontSize": 12,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "right": 10,
  "iconWidth": 20,
  "label": "",
  "top": 10
 }
], 
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scripts": {
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "shadow": false,
 "contentOpaque": false,
 "buttonToggleMute": "this.IconButton_33449C9E_3F3B_88F6_41CA_CE094980C356",
 "horizontalAlign": "left",
 "class": "Player",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingTop": 0,
 "minWidth": 20,
 "width": "100%",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderSize": 0,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "gap": 10,
 "paddingBottom": 0,
 "vrPolyfillScale": 0.5,
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_136600B2_305F_CBFA_41B8_B6C386FD826B], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": false
})