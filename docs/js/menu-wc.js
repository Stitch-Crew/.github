'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">stitch-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'data-target="#xs-controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' :
                                            'id="xs-controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' }>
                                            <li class="link">
                                                <a href="controllers/AccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'data-target="#xs-injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' :
                                        'id="xs-injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' }>
                                        <li class="link">
                                            <a href="injectables/AccountRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EncryptionModule.html" data-type="entity-link" >EncryptionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'data-target="#xs-controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' :
                                            'id="xs-controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' }>
                                            <li class="link">
                                                <a href="controllers/EncryptionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EncryptionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'data-target="#xs-injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' :
                                        'id="xs-injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' }>
                                        <li class="link">
                                            <a href="injectables/EncryptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EncryptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HeimdallModule.html" data-type="entity-link" >HeimdallModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' : 'data-target="#xs-injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' :
                                        'id="xs-injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' }>
                                        <li class="link">
                                            <a href="injectables/HeimdallService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeimdallService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StitchModule.html" data-type="entity-link" >StitchModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestModule.html" data-type="entity-link" >TestModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TokenModule.html" data-type="entity-link" >TokenModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' : 'data-target="#xs-injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' :
                                        'id="xs-injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokensService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokensService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UptimeModule.html" data-type="entity-link" >UptimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' : 'data-target="#xs-controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' :
                                            'id="xs-controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' }>
                                            <li class="link">
                                                <a href="controllers/UptimeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UptimeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ValidationModule.html" data-type="entity-link" >ValidationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' : 'data-target="#xs-injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' :
                                        'id="xs-injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' }>
                                        <li class="link">
                                            <a href="injectables/ValidationPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationPipe</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountResponseDto.html" data-type="entity-link" >AccountResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountTokenResponseDto.html" data-type="entity-link" >AccountTokenResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthenticationResponseDto.html" data-type="entity-link" >AuthenticationResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccountDto.html" data-type="entity-link" >CreateAccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDecryptionDto.html" data-type="entity-link" >CreateDecryptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEncryptionDto.html" data-type="entity-link" >CreateEncryptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseEncryptionDto.html" data-type="entity-link" >ResponseEncryptionDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountRepository.html" data-type="entity-link" >AccountRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JWTGuard.html" data-type="entity-link" >JWTGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokensRepository.html" data-type="entity-link" >RefreshTokensRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecurityMiddleware.html" data-type="entity-link" >SecurityMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessTokenPayload.html" data-type="entity-link" >AccessTokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountToken.html" data-type="entity-link" >AccountToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DecryptedResponse.html" data-type="entity-link" >DecryptedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EncryptedResponse.html" data-type="entity-link" >EncryptedResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HandshakeResponse.html" data-type="entity-link" >HandshakeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRepository.html" data-type="entity-link" >IRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IService.html" data-type="entity-link" >IService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshToken.html" data-type="entity-link" >RefreshToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefreshTokenPayload.html" data-type="entity-link" >RefreshTokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseInterface.html" data-type="entity-link" >ResponseInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});