id: "c1064364b2c64740874d714c70db6351"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643219050
  nanos: 357487464
}
model {
  id: "general-image-recognition"
  name: "general"
  created_at {
    seconds: 1457543499
    nanos: 608845000
  }
  app_id: "main"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    fields_map {
      fields {
        key: "concepts"
        value {
          string_value: "softmax"
        }
      }
    }
  }
  model_version {
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  display_name: "general-visual-classifier"
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "image"
        value {
          string_value: "images"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "03722c867ba74e25870d81d90975a490"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "locomotive"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "transportation system"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "travel"
    value: 0.9889795780181885
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "commuter"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "platform"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "light"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "train station"
    value: 0.9687404036521912
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "blur"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "city"
    value: 0.9614798426628113
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "road"
    value: 0.9613829851150513
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "urban"
    value: 0.9603424668312073
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "traffic"
    value: 0.959934651851654
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "street"
    value: 0.9474142789840698
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "public"
    value: 0.9343122839927673
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "tramway"
    value: 0.9318979382514954
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "business"
    value: 0.9294138550758362
    app_id: "main"
  }
}













newFunction()

function newFunction() {
    { "status"; { "code"; 10000, "description"; "Ok", "req_id"; "d1d6d139bc4105764914dc785b8213d2"} 
     "outputs";[{ "id": "a6824272ae5f48cf842add95f8ccf295", "status": { "code": 10000, "description": "Ok" }, "created_at": "2022-07-22T05:14:12.611088885Z", "model": { "id": "face-detection", "name": "Face", "created_at": "2020-11-25T16:50:24.453038Z", "modified_at": "2021-10-20T11:34:15.960670Z", "app_id": "main", "output_info": { "output_config": { "concepts_mutually_exclusive": false, "closed_environment": false, "max_concepts": 0, "min_value": 0 }, "message": "Show output_info with: GET /models/{model_id}/output_info", "fields_map": { "regions[...].data.concepts[...].id": "predicted_det_labels", "regions[...].data.concepts[...].value": "predicted_det_scores", "regions[...].region_info.bounding_box": "predicted_det_bboxes" }, "params": { "detection_threshold": 0.9 } }, "model_version": { "id": "45fb9a671625463fa646c3523a3087d5", "created_at": "2021-03-04T17:40:26.081729Z", "status": { "code": 21100, "description": "Model is trained and ready" }, "visibility": { "gettable": 50 }, "app_id": "main", "user_id": "clarifai", "metadata": {} }, "display_name": "Face-visual-detector", "user_id": "clarifai", "input_info": { "fields_map": { "image": "images" } }, "train_info": {}, "model_type_id": "visual-detector", "visibility": { "gettable": 50 }, "metadata": null, "presets": null, "languages": [], "import_info": {}, "workflow_recommended": false }, "input": { "id": "b2b363c13a18435a8ff8c3315fa9511e", "data": { "image": { "url": "https://assets.vogue.com/photos/61d862397b3ab37c2143d75a/4:3/w_1919,h_1439,c_limit/zendaya_1.jpg" } } }, "data": { "regions": [{ "id": "ec25d6a488c47ea91f7d765a13148e36", "region_info": { "bounding_box": { "top_row": 0.2580573, "left_col": 0.43233073, "bottom_row": 0.5027656, "right_col": 0.57646745 } }, "data": { "concepts": [{ "id": "ai_b1b1b1b1", "name": "BINARY_POSITIVE", "value": 0.9999864, "app_id": "main" }] }, "value": 0.9999864 }] } }]} 
}
