/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./serviceWorker.js",['./workbox-4e9c5f4e'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "paraview-glance-2-"
  });
  self.skipWaiting();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "glance-external-ITKReader.f6adb464883567c0155d.js",
    "revision": null
  }, {
    "url": "glance-external-Workbox.f502707ab4fa90c981e0.js",
    "revision": null
  }, {
    "url": "glance.23221d38e8f354d8b30e.js",
    "revision": null
  }, {
    "url": "itk/FloatTypes.js",
    "revision": "786c92c0279ce8eacd7cd96eba8a48f3"
  }, {
    "url": "itk/IOTypes.js",
    "revision": "274a7502c8f12328d3746e0492504140"
  }, {
    "url": "itk/Image.js",
    "revision": "088184a92ce08bbc0cb664cade150176"
  }, {
    "url": "itk/ImageIOIndex.js",
    "revision": "9b88a4190ddca44da03daa1474d1d3f6"
  }, {
    "url": "itk/ImageIOs/itkBMPImageIOJSBinding.js",
    "revision": "889f9d195a7711352a0be7add794330d"
  }, {
    "url": "itk/ImageIOs/itkBMPImageIOJSBindingWasm.js",
    "revision": "8fa7ea58bc324f1f6bab3c83f75c52c0"
  }, {
    "url": "itk/ImageIOs/itkBioRadImageIOJSBinding.js",
    "revision": "6b0ce1b6c569e2218db68bd34161275c"
  }, {
    "url": "itk/ImageIOs/itkBioRadImageIOJSBindingWasm.js",
    "revision": "a90ad60c7c445db850d71abbe1529b78"
  }, {
    "url": "itk/ImageIOs/itkDCMTKImageIOJSBindingWasm.js",
    "revision": "963b5fef715be1595f41be55f265dd8b"
  }, {
    "url": "itk/ImageIOs/itkDICOMImageSeriesReaderJSBindingWasm.js",
    "revision": "445e866e5a5166a1b98cf537dc9d6aa6"
  }, {
    "url": "itk/ImageIOs/itkGDCMImageIOJSBindingWasm.js",
    "revision": "9b6055c270a56c9e94cc4a970006db56"
  }, {
    "url": "itk/ImageIOs/itkGE4ImageIOJSBinding.js",
    "revision": "5cbeec9a5fac8340994629456de47952"
  }, {
    "url": "itk/ImageIOs/itkGE4ImageIOJSBindingWasm.js",
    "revision": "4239e335fe6ec9cf1a29817eb53ceecb"
  }, {
    "url": "itk/ImageIOs/itkGE5ImageIOJSBinding.js",
    "revision": "233422c8b9d0f6d476a30b649fdc9746"
  }, {
    "url": "itk/ImageIOs/itkGE5ImageIOJSBindingWasm.js",
    "revision": "27b2b3eea6fb46e4a2e9c6125654061a"
  }, {
    "url": "itk/ImageIOs/itkGEAdwImageIOJSBinding.js",
    "revision": "dc66dd020e66394855dabfc604864fec"
  }, {
    "url": "itk/ImageIOs/itkGEAdwImageIOJSBindingWasm.js",
    "revision": "f3e5c01d06606da4cb35d2820c7c441a"
  }, {
    "url": "itk/ImageIOs/itkGiplImageIOJSBinding.js",
    "revision": "77bc6c98cb7d72796267d87be150dbaf"
  }, {
    "url": "itk/ImageIOs/itkGiplImageIOJSBindingWasm.js",
    "revision": "f1e98050188ddbb993bb83341ed06ac7"
  }, {
    "url": "itk/ImageIOs/itkHDF5ImageIOJSBindingWasm.js",
    "revision": "7f61e95c7a31619cedce0fbe6cc98c96"
  }, {
    "url": "itk/ImageIOs/itkJPEGImageIOJSBinding.js",
    "revision": "73361785ff600d0aed946259b3dff643"
  }, {
    "url": "itk/ImageIOs/itkJPEGImageIOJSBindingWasm.js",
    "revision": "3719dcbb85641da2cbac0f798722e614"
  }, {
    "url": "itk/ImageIOs/itkJSONImageIOJSBinding.js",
    "revision": "9e77cc7625625537fbd3a588c1b7ccf1"
  }, {
    "url": "itk/ImageIOs/itkJSONImageIOJSBindingWasm.js",
    "revision": "eaa4c63301a532805cbc5adb82f17267"
  }, {
    "url": "itk/ImageIOs/itkLSMImageIOJSBinding.js",
    "revision": "cb4b0f30537baa118dfad179aee05c9f"
  }, {
    "url": "itk/ImageIOs/itkLSMImageIOJSBindingWasm.js",
    "revision": "09ecb40ae91c21c2d7a1a013aef792d5"
  }, {
    "url": "itk/ImageIOs/itkMGHImageIOJSBinding.js",
    "revision": "5b541dd791a44bf01a3b66db246bb096"
  }, {
    "url": "itk/ImageIOs/itkMGHImageIOJSBindingWasm.js",
    "revision": "53e1b34486bda44d104b29fe4f9473cb"
  }, {
    "url": "itk/ImageIOs/itkMINCImageIOJSBindingWasm.js",
    "revision": "3aac6ff038a4c826a76376f9cd53ec3c"
  }, {
    "url": "itk/ImageIOs/itkMRCImageIOJSBinding.js",
    "revision": "f9f72e99b6f5b1f7d926e2f9dc517bd9"
  }, {
    "url": "itk/ImageIOs/itkMRCImageIOJSBindingWasm.js",
    "revision": "c91ed8f2d12d7b47ea12ae7c833e424f"
  }, {
    "url": "itk/ImageIOs/itkMetaImageIOJSBinding.js",
    "revision": "68515e36872fce3532c7a90ed8938f0d"
  }, {
    "url": "itk/ImageIOs/itkMetaImageIOJSBindingWasm.js",
    "revision": "0962c8f9c432315ed81fe3394b38ad8c"
  }, {
    "url": "itk/ImageIOs/itkNiftiImageIOJSBinding.js",
    "revision": "2fb9aa992de55d384c1b168629573d81"
  }, {
    "url": "itk/ImageIOs/itkNiftiImageIOJSBindingWasm.js",
    "revision": "68b9d0fe93132deca39b0eeda5a44715"
  }, {
    "url": "itk/ImageIOs/itkNrrdImageIOJSBinding.js",
    "revision": "8482cea201c035e968ae8b1a4181b46c"
  }, {
    "url": "itk/ImageIOs/itkNrrdImageIOJSBindingWasm.js",
    "revision": "de24ebae38bed65f952c720a909dd2db"
  }, {
    "url": "itk/ImageIOs/itkPNGImageIOJSBinding.js",
    "revision": "c2b3f9100f1c08e48098e8be2b837a11"
  }, {
    "url": "itk/ImageIOs/itkPNGImageIOJSBindingWasm.js",
    "revision": "17d415929f1ed7c133b36f3527faf38f"
  }, {
    "url": "itk/ImageIOs/itkTIFFImageIOJSBinding.js",
    "revision": "acdbedf68070b66cd317316b845d4961"
  }, {
    "url": "itk/ImageIOs/itkTIFFImageIOJSBindingWasm.js",
    "revision": "f706c76ba2cfdfb2e859eccd1da3cc5f"
  }, {
    "url": "itk/ImageIOs/itkVTKImageIOJSBinding.js",
    "revision": "53e381ef0269a5b7221838c6f807c65e"
  }, {
    "url": "itk/ImageIOs/itkVTKImageIOJSBindingWasm.js",
    "revision": "0fc4db16de68c66ca74b0abc309fe67c"
  }, {
    "url": "itk/ImageType.js",
    "revision": "4d52f2d76a46b0adffd2b184b41028e3"
  }, {
    "url": "itk/IntTypes.js",
    "revision": "32a87875e1d723c67e39b439d662af79"
  }, {
    "url": "itk/Matrix.js",
    "revision": "696e1fd396a08372c12853fe14520607"
  }, {
    "url": "itk/Mesh.js",
    "revision": "39ee277da2b2eaa8c94f989aa4cd4a6e"
  }, {
    "url": "itk/MeshIOIndex.js",
    "revision": "663e93bd8be843afff0354112e3287e8"
  }, {
    "url": "itk/MeshIOs/itkBYUMeshIOJSBinding.js",
    "revision": "ebcf31ef16e061ab032d4c584d9b6356"
  }, {
    "url": "itk/MeshIOs/itkBYUMeshIOJSBindingWasm.js",
    "revision": "36d5e0ef3ff1fec52f2202196448657a"
  }, {
    "url": "itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBinding.js",
    "revision": "9e910eaa6bef62aa99d6bc0d4787bee2"
  }, {
    "url": "itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBindingWasm.js",
    "revision": "3cf17876e22b258ed013f623ed2657c4"
  }, {
    "url": "itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBinding.js",
    "revision": "739f487d8ad0542b248ec95cac7b2dbf"
  }, {
    "url": "itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBindingWasm.js",
    "revision": "ca511b81bd9c191e5d7944e53afc61ef"
  }, {
    "url": "itk/MeshIOs/itkOBJMeshIOJSBinding.js",
    "revision": "30abc9150b803a6a23aa582f4e0632ea"
  }, {
    "url": "itk/MeshIOs/itkOBJMeshIOJSBindingWasm.js",
    "revision": "6bbc811d0e60838bfeb6ed96a707a1c8"
  }, {
    "url": "itk/MeshIOs/itkOFFMeshIOJSBinding.js",
    "revision": "efbb8e17528a6831ba57a310ac00e20d"
  }, {
    "url": "itk/MeshIOs/itkOFFMeshIOJSBindingWasm.js",
    "revision": "75a90a0bc18001a682654733a97ad83c"
  }, {
    "url": "itk/MeshIOs/itkSTLMeshIOJSBinding.js",
    "revision": "e530252c0228ff4a35cbcf10eb23a709"
  }, {
    "url": "itk/MeshIOs/itkSTLMeshIOJSBindingWasm.js",
    "revision": "6af94a13f349ea268bb473119ec7da28"
  }, {
    "url": "itk/MeshIOs/itkVTKPolyDataMeshIOJSBinding.js",
    "revision": "450cd8a882452b13791843ba93f5a5f3"
  }, {
    "url": "itk/MeshIOs/itkVTKPolyDataMeshIOJSBindingWasm.js",
    "revision": "eaeede273d523d3e97e8e68e3e92dae5"
  }, {
    "url": "itk/MeshType.js",
    "revision": "f2ec2302c5f1bf554ca8d3cac9e19c05"
  }, {
    "url": "itk/MimeToImageIO.js",
    "revision": "3e76827bb8cbf4b7c540ed2805eb9b9e"
  }, {
    "url": "itk/MimeToMeshIO.js",
    "revision": "aba361459fce0489e3be3cc8b0b58e23"
  }, {
    "url": "itk/MimeToPolyDataIO.js",
    "revision": "aba361459fce0489e3be3cc8b0b58e23"
  }, {
    "url": "itk/Pipelines/MeshToPolyDataWasm.js",
    "revision": "8e8d8af3b50221e471bcff9d896b5212"
  }, {
    "url": "itk/Pipelines/itkfiltering.js",
    "revision": "58956cdac3c0d8838b771abf7cfdd9e6"
  }, {
    "url": "itk/Pipelines/itkfilteringWasm.js",
    "revision": "e14b48e1bf552a5beebada601e900c8c"
  }, {
    "url": "itk/PixelTypes.js",
    "revision": "4fa031705ef3b81acc4a2717e0fd2049"
  }, {
    "url": "itk/PolyDataIOIndex.js",
    "revision": "9c4ff3746125324d240de953be9d145d"
  }, {
    "url": "itk/PolyDataIOs/VTKExodusFileReaderWasm.js",
    "revision": "0cea2bdb624f7697f7e3bb44ef27b807"
  }, {
    "url": "itk/PolyDataIOs/VTKLegacyFileReaderWasm.js",
    "revision": "f275d9c9ac776f20858e58aa921a4637"
  }, {
    "url": "itk/PolyDataIOs/VTKXMLFileReaderWasm.js",
    "revision": "c4a64b4da793879d85412d2ba19e6ba2"
  }, {
    "url": "itk/WebWorkers/ImageIO.worker.js",
    "revision": "c4c39e7fe464621d0c7ed77433251e52"
  }, {
    "url": "itk/WebWorkers/MeshIO.worker.js",
    "revision": "eebdc13b008b70bcd4f4086ac3b913e5"
  }, {
    "url": "itk/WebWorkers/Pipeline.worker.js",
    "revision": "9d7e5c4e6c90e89c8b8296cda1828d67"
  }, {
    "url": "itk/WorkerPool.js",
    "revision": "1874ba62ef52aefb3580e0a32563be89"
  }, {
    "url": "itk/bufferToTypedArray.js",
    "revision": "fc3c0b40eb13b33f260a70baa3797763"
  }, {
    "url": "itk/copyImage.js",
    "revision": "8e7505ce417db0921c954227e4ef6f4b"
  }, {
    "url": "itk/createWebworkerPromise.js",
    "revision": "a67988d2ac2f03d131f3b654f3caa233"
  }, {
    "url": "itk/extensionToImageIO.js",
    "revision": "3103aff5e1935d3349fd6987e65bb6d9"
  }, {
    "url": "itk/extensionToMeshIO.js",
    "revision": "6047791b09b38e5e2dfc3e976a8ffda1"
  }, {
    "url": "itk/extensionToPolyDataIO.js",
    "revision": "9819ccde92d374ae2455823dc2ef95fa"
  }, {
    "url": "itk/getFileExtension.js",
    "revision": "04917c3ff34191f39354bb00332572ef"
  }, {
    "url": "itk/getMatrixElement.js",
    "revision": "b5b833b11487416068b17f1395023a40"
  }, {
    "url": "itk/imageIOComponentToJSComponent.js",
    "revision": "895102fb7c928d61e36e10d8d9391b11"
  }, {
    "url": "itk/imageIOPixelTypeToJSPixelType.js",
    "revision": "5603b2b293f344b99ee6f1823ef13824"
  }, {
    "url": "itk/imageJSComponentToIOComponent.js",
    "revision": "2088702a4cb9117c9116bef51376d658"
  }, {
    "url": "itk/imageJSPixelTypeToIOPixelType.js",
    "revision": "31b0f68a30ede357ed4ea68fc3719601"
  }, {
    "url": "itk/imageSharedBufferOrCopy.js",
    "revision": "a12d739ea218567712ff063a33330984"
  }, {
    "url": "itk/index.js",
    "revision": "8e17e22871671433c9d04dacc27427c4"
  }, {
    "url": "itk/itk-js-cli.js",
    "revision": "0a10667dff038be6bad69eefc02121d0"
  }, {
    "url": "itk/itkConfig.js",
    "revision": "a9da642a4fc895b80a933bea1de52377"
  }, {
    "url": "itk/itkConfigCDN.js",
    "revision": "0d81309dd9518d64c9006374a77e946c"
  }, {
    "url": "itk/loadEmscriptenModuleBrowser.js",
    "revision": "6b4e95540d9b4bf38adb149c877788be"
  }, {
    "url": "itk/loadEmscriptenModuleNode.js",
    "revision": "662f4d63587344b9304226d96222833f"
  }, {
    "url": "itk/meshIOComponentToJSComponent.js",
    "revision": "90de7c32cf5cd3d60126c6f919b68787"
  }, {
    "url": "itk/meshIOPixelTypeToJSPixelType.js",
    "revision": "ec7177162b0dc19137f59b9f583e6add"
  }, {
    "url": "itk/meshJSComponentToIOComponent.js",
    "revision": "2b27cef5a7d43957a28f4da96626fd14"
  }, {
    "url": "itk/meshJSPixelTypeToIOPixelType.js",
    "revision": "05f00c2dd4bc66db539e4f414de6a2b1"
  }, {
    "url": "itk/node_modules/axios/dist/axios.js",
    "revision": "73fcc4182a225c2dcb1d8dde1538535f"
  }, {
    "url": "itk/node_modules/axios/dist/axios.min.js",
    "revision": "e63531350b726384f625ead641f5ad66"
  }, {
    "url": "itk/node_modules/axios/index.js",
    "revision": "7057c14dacb26642c8e57acd1febb0b8"
  }, {
    "url": "itk/node_modules/axios/lib/adapters/http.js",
    "revision": "2804d3e4b600ce93fa099528359ec6e1"
  }, {
    "url": "itk/node_modules/axios/lib/adapters/xhr.js",
    "revision": "eec82f5a4702043bd9f13becf397945e"
  }, {
    "url": "itk/node_modules/axios/lib/axios.js",
    "revision": "bbc19b5030890f2bab53eba3fe6a01e8"
  }, {
    "url": "itk/node_modules/axios/lib/cancel/Cancel.js",
    "revision": "e583d0dcca1cc1d22a26e5482d99e599"
  }, {
    "url": "itk/node_modules/axios/lib/cancel/CancelToken.js",
    "revision": "d42641a6c22ec71365e24f453e730b18"
  }, {
    "url": "itk/node_modules/axios/lib/cancel/isCancel.js",
    "revision": "0a6a3b3ade1a42f61f2c7ebf56b38419"
  }, {
    "url": "itk/node_modules/axios/lib/core/Axios.js",
    "revision": "b326b462d63ddbe80b1083a16b8de9cb"
  }, {
    "url": "itk/node_modules/axios/lib/core/InterceptorManager.js",
    "revision": "54214e1330787e4ed5735a9996f39fe5"
  }, {
    "url": "itk/node_modules/axios/lib/core/buildFullPath.js",
    "revision": "fa83814d8b074afbf7585c716a7d0f9b"
  }, {
    "url": "itk/node_modules/axios/lib/core/createError.js",
    "revision": "47b9e8b556cbbfafaa16494df8c5a343"
  }, {
    "url": "itk/node_modules/axios/lib/core/dispatchRequest.js",
    "revision": "7e3797355c56b9c8ad268615fbad0f8d"
  }, {
    "url": "itk/node_modules/axios/lib/core/enhanceError.js",
    "revision": "8359e5e9a065491266049799295037cb"
  }, {
    "url": "itk/node_modules/axios/lib/core/mergeConfig.js",
    "revision": "be9feba2b764778bd84294a4373e65bf"
  }, {
    "url": "itk/node_modules/axios/lib/core/settle.js",
    "revision": "45f0e2244bc031a06c6061c4eb2726ab"
  }, {
    "url": "itk/node_modules/axios/lib/core/transformData.js",
    "revision": "917700b21d020f1d2446b5bc14cb50e4"
  }, {
    "url": "itk/node_modules/axios/lib/defaults.js",
    "revision": "36850c1f0b016e4ed28a9bd9e4a7b82f"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/bind.js",
    "revision": "38600da1e81ede8cd8f1d10fd1012cda"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/buildURL.js",
    "revision": "0cf7887862ffc192863ff71c1d7a4ec8"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/combineURLs.js",
    "revision": "6a5f44f8bc3b8460552c15743c96be11"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/cookies.js",
    "revision": "3eb7ef75580020e60df0e5409288e8e3"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/deprecatedMethod.js",
    "revision": "aed58ab654a201e2309c73cd93aec84c"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/isAbsoluteURL.js",
    "revision": "5e91f207890f3cdb48a2021685b7f19a"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/isURLSameOrigin.js",
    "revision": "df1b887c1130ecf8dd7e588b8b33ec4a"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/normalizeHeaderName.js",
    "revision": "87472e06b6f430c59b2c419f62086cc4"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/parseHeaders.js",
    "revision": "9afdf3d5ed4e2f60770faf8d063fedc6"
  }, {
    "url": "itk/node_modules/axios/lib/helpers/spread.js",
    "revision": "f3932e6bab8473987bd2ee295c773606"
  }, {
    "url": "itk/node_modules/axios/lib/utils.js",
    "revision": "4a98ffa0b72062280dc2555154a7bb31"
  }, {
    "url": "itk/node_modules/debug/karma.conf.js",
    "revision": "06f3babbdc43c6c4dd1493b6c1af32e2"
  }, {
    "url": "itk/node_modules/debug/node.js",
    "revision": "79f3814f32362c1c6f9dbb8a1e3b01bf"
  }, {
    "url": "itk/node_modules/debug/src/browser.js",
    "revision": "23d5a69338855f953a919ce32b53a2d2"
  }, {
    "url": "itk/node_modules/debug/src/debug.js",
    "revision": "140d46ef8644efa440cd8b602d56b1e0"
  }, {
    "url": "itk/node_modules/debug/src/index.js",
    "revision": "afd4620d6095583cdae71b234c60c13a"
  }, {
    "url": "itk/node_modules/debug/src/node.js",
    "revision": "2754f6e90cbac39ee063f9b010b135f3"
  }, {
    "url": "itk/node_modules/follow-redirects/http.js",
    "revision": "f94bfd10b869e19d4ebf749ccbc44fb4"
  }, {
    "url": "itk/node_modules/follow-redirects/https.js",
    "revision": "4db3f05178b291f5f607f677d82d064f"
  }, {
    "url": "itk/node_modules/follow-redirects/index.js",
    "revision": "1065000060594967ec83a45eed174189"
  }, {
    "url": "itk/node_modules/fs-extra/lib/copy-sync/copy-sync.js",
    "revision": "23f879c19b9f42b90b56648362e092a2"
  }, {
    "url": "itk/node_modules/fs-extra/lib/copy-sync/index.js",
    "revision": "95494fc7a02209518e070c5470727df1"
  }, {
    "url": "itk/node_modules/fs-extra/lib/copy/copy.js",
    "revision": "f7d861c3469b46cc419136ff585c9f97"
  }, {
    "url": "itk/node_modules/fs-extra/lib/copy/index.js",
    "revision": "562ca7a595a7b1b7270f140c32689ac2"
  }, {
    "url": "itk/node_modules/fs-extra/lib/empty/index.js",
    "revision": "d2e0e0eb95ac259bc7f8fb65b992ef0f"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/file.js",
    "revision": "cf3696fe43fe778d704fcf8fcd486d74"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/index.js",
    "revision": "27a43257b6009138ffaa8a7462ddba66"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/link.js",
    "revision": "ff62149b525aef3fbfbd4accd2256aca"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/symlink-paths.js",
    "revision": "be9c8f74132d37198fabee775b684481"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/symlink-type.js",
    "revision": "75871bc803a6046deefe24a3f02f4f3d"
  }, {
    "url": "itk/node_modules/fs-extra/lib/ensure/symlink.js",
    "revision": "f8f10d59b5a7630a949c716876003c3f"
  }, {
    "url": "itk/node_modules/fs-extra/lib/fs/index.js",
    "revision": "605f637e4a7753f3124035794c882c4f"
  }, {
    "url": "itk/node_modules/fs-extra/lib/index.js",
    "revision": "f42d0d00f3abb1bd2153a75dcc7a0c49"
  }, {
    "url": "itk/node_modules/fs-extra/lib/json/index.js",
    "revision": "dbced9952c4222c32a88bba2d8b4ef06"
  }, {
    "url": "itk/node_modules/fs-extra/lib/json/jsonfile.js",
    "revision": "9a378d46c0c6a89b9e32d5c90ae44be9"
  }, {
    "url": "itk/node_modules/fs-extra/lib/json/output-json-sync.js",
    "revision": "2e5409e141cc5ed747bf744dc62b3362"
  }, {
    "url": "itk/node_modules/fs-extra/lib/json/output-json.js",
    "revision": "551ad6b0fe72dd3b16fdbde88679f03a"
  }, {
    "url": "itk/node_modules/fs-extra/lib/mkdirs/index.js",
    "revision": "9cc1d8bb2c89810566f60c0664d974b9"
  }, {
    "url": "itk/node_modules/fs-extra/lib/mkdirs/make-dir.js",
    "revision": "4ff0d3aa621c19135e377be1dd121bca"
  }, {
    "url": "itk/node_modules/fs-extra/lib/move-sync/index.js",
    "revision": "c2e4f586bcc5bc6e0db8369003bcfd6b"
  }, {
    "url": "itk/node_modules/fs-extra/lib/move-sync/move-sync.js",
    "revision": "cc9339e7d4e2ce08f6d79d08d348d824"
  }, {
    "url": "itk/node_modules/fs-extra/lib/move/index.js",
    "revision": "1895bdcd799c951badcafda242a46247"
  }, {
    "url": "itk/node_modules/fs-extra/lib/move/move.js",
    "revision": "75b52861f7cd90b6ed7cece7279ce037"
  }, {
    "url": "itk/node_modules/fs-extra/lib/output/index.js",
    "revision": "b0adfc74c8e51ce2ab659bfc13752ed3"
  }, {
    "url": "itk/node_modules/fs-extra/lib/path-exists/index.js",
    "revision": "dfb2813673ea5279a9aa7305e5fe33f3"
  }, {
    "url": "itk/node_modules/fs-extra/lib/remove/index.js",
    "revision": "e8c6a5092ac319dec6888ff3686e1dd5"
  }, {
    "url": "itk/node_modules/fs-extra/lib/remove/rimraf.js",
    "revision": "8af4d4abb5011a6543699bfc934d2522"
  }, {
    "url": "itk/node_modules/fs-extra/lib/util/stat.js",
    "revision": "cbbd1b4970fa837c23013c2431b8c35e"
  }, {
    "url": "itk/node_modules/fs-extra/lib/util/utimes.js",
    "revision": "b95e8f0f6d31e27cacaf907e04d44ad7"
  }, {
    "url": "itk/node_modules/jsonfile/index.js",
    "revision": "c18cdb1953c23651297eecd0c2a35df9"
  }, {
    "url": "itk/node_modules/jsonfile/utils.js",
    "revision": "dbf76159ea111d8f0a848e94285b0b68"
  }, {
    "url": "itk/node_modules/universalify/index.js",
    "revision": "86ef0931da77d998bfa45c365b1300e1"
  }, {
    "url": "itk/readArrayBuffer.js",
    "revision": "52c7067839ff7a061d7b7ab36c6f3060"
  }, {
    "url": "itk/readBlob.js",
    "revision": "b9c4329a7319055ed6fa6bc207f38c26"
  }, {
    "url": "itk/readFile.js",
    "revision": "bedc9547efc2fea97cc526a4669a0d35"
  }, {
    "url": "itk/readImageArrayBuffer.js",
    "revision": "a259a00465ba77dab3ab7af895c1963b"
  }, {
    "url": "itk/readImageBlob.js",
    "revision": "37c28c5ca49b26a58a643701d05b3615"
  }, {
    "url": "itk/readImageDICOMFileSeries.js",
    "revision": "78a4b3503aa2f8b9fc6c6fc11b59a4a8"
  }, {
    "url": "itk/readImageEmscriptenFSDICOMFileSeries.js",
    "revision": "e55d37cf66d30aa0af09dfc793c05d64"
  }, {
    "url": "itk/readImageEmscriptenFSFile.js",
    "revision": "9dcb75216b2bcc76fb82a17a3efd49d3"
  }, {
    "url": "itk/readImageFile.js",
    "revision": "972c0f132fa59f991c69870f7334e793"
  }, {
    "url": "itk/readImageHTTP.js",
    "revision": "16d70e5fdc745c1f135f79b9c75af71e"
  }, {
    "url": "itk/readImageLocalDICOMFileSeries.js",
    "revision": "ae400fe4b398d153b238c3235a9bd359"
  }, {
    "url": "itk/readImageLocalDICOMFileSeriesSync.js",
    "revision": "f5304b91ab32c64e97cb7914073e1e09"
  }, {
    "url": "itk/readImageLocalFile.js",
    "revision": "737d2cb279cddbd825f37d09847700d5"
  }, {
    "url": "itk/readImageLocalFileSync.js",
    "revision": "109df853264bcf775af5dd0b3b55f61e"
  }, {
    "url": "itk/readLocalFile.js",
    "revision": "eb491746332118fe063931f33418d59a"
  }, {
    "url": "itk/readLocalFileSync.js",
    "revision": "e5a2bd3e980bcebc9c693298e7da386d"
  }, {
    "url": "itk/readMeshArrayBuffer.js",
    "revision": "3ac0c0d4ad2b914277576007a7f0a9d6"
  }, {
    "url": "itk/readMeshBlob.js",
    "revision": "761e3e9e45b214e01df98f1f9c14f6ad"
  }, {
    "url": "itk/readMeshEmscriptenFSFile.js",
    "revision": "25dc1fdbab7b50e8e47222cd8f80458f"
  }, {
    "url": "itk/readMeshFile.js",
    "revision": "4846a9eda71178535634b335617e29c5"
  }, {
    "url": "itk/readMeshLocalFile.js",
    "revision": "a257c746adfc7f224dd00585882d4d57"
  }, {
    "url": "itk/readMeshLocalFileSync.js",
    "revision": "93367c12748c47e1b1f420285feec59e"
  }, {
    "url": "itk/readPolyDataArrayBuffer.js",
    "revision": "3e4fbdd59d13e372d685d6f6c0ab8438"
  }, {
    "url": "itk/readPolyDataBlob.js",
    "revision": "054aebd1b227eb71dc9220dc32c2bde5"
  }, {
    "url": "itk/readPolyDataFile.js",
    "revision": "c4d76cf30c4d6b3d16d7a7c5d01c4831"
  }, {
    "url": "itk/readPolyDataLocalFile.js",
    "revision": "72d197d73334673dae99747216b6f052"
  }, {
    "url": "itk/readPolyDataLocalFileSync.js",
    "revision": "8a9c327159998fe88c4792c6f633a387"
  }, {
    "url": "itk/runPipelineBrowser.js",
    "revision": "3eb328f58bd29b037ff91a94d6b5289a"
  }, {
    "url": "itk/runPipelineEmscripten.js",
    "revision": "2c996749c20c37aee6df7a7fc6818300"
  }, {
    "url": "itk/runPipelineNode.js",
    "revision": "bad2e6fb64ae0258958b5da17d166789"
  }, {
    "url": "itk/runPipelineNodeSync.js",
    "revision": "5361e5412d619c76d357a7568e51d6b8"
  }, {
    "url": "itk/setMatrixElement.js",
    "revision": "a0099a7c2321a96954e51816e53c6074"
  }, {
    "url": "itk/stackImages.js",
    "revision": "68382b996c21f8e4d5167f6b1a63a8b8"
  }, {
    "url": "itk/umd/itk.js",
    "revision": "c78d2de58568fcd53468b76dabaffcfa"
  }, {
    "url": "itk/writeArrayBuffer.js",
    "revision": "30d656c5e27d8146da1c971482dd8706"
  }, {
    "url": "itk/writeImageArrayBuffer.js",
    "revision": "a6bccc57b7bb0453900b445c52c3b894"
  }, {
    "url": "itk/writeImageEmscriptenFSFile.js",
    "revision": "6b45773bc0eccf6dd0ef17773a7dbc46"
  }, {
    "url": "itk/writeImageLocalFile.js",
    "revision": "4e0622719fdc7a2e51dea811a1aa401a"
  }, {
    "url": "itk/writeImageLocalFileSync.js",
    "revision": "38932fa7a9d4746850294a61ad1b7a80"
  }, {
    "url": "itk/writeLocalFile.js",
    "revision": "f9d99f8f674622d089cbecabd848669b"
  }, {
    "url": "itk/writeLocalFileSync.js",
    "revision": "811f2e370fac4bf4ce9dd05180903807"
  }, {
    "url": "itk/writeMeshArrayBuffer.js",
    "revision": "4766a1caa590a090ea1078c9a9fb2cc5"
  }, {
    "url": "itk/writeMeshEmscriptenFSFile.js",
    "revision": "ec1057f541c847b05666501a649c9327"
  }, {
    "url": "itk/writeMeshLocalFile.js",
    "revision": "0797ad346c4a1b0e6655b79c78813313"
  }, {
    "url": "itk/writeMeshLocalFileSync.js",
    "revision": "23fb1410a127c4861127777e7d39ab87"
  }, {
    "url": "runtime.6234dd7fbdd0d13511ef.js",
    "revision": null
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(/(\.css|\.ttf|\.eot|\.woff|\.js|\.png|\.svg|\.wasm)$/, new workbox.NetworkFirst(), 'GET');

}));
