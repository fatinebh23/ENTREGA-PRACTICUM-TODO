<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Home</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">

        <!-- Styles -->
        <style>
            body {
                font-family: 'figtree', sans-serif;
            }
        </style>
    </head>
    <body>
        <h2>Hola</h2>
        
    <!--<div class="modal fade e-popupLogin" id="loginForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden">
            <div class="modal-header p-5 justify-content-center position-relative bg-black">
                <span class="btn-close-modal text-white f-size-14 cursor-pointer" data-bs-dismiss="modal">{{ __('Cerrar') }}<i class="fal fa-times"></i></span>
                <span class="f-size-24 ff-syne text-white text-center w-100">{{ __('Inicia sesión') }}</span>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" >
                        <div class="col-12 col-lg-10 offset-lg-1" >
                            @include('web.template-parts.forms.auth.login')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade e-popupLogin" id="resetPasswordForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden">
            <div class="modal-header p-5 justify-content-center position-relative bg-black">
                <span class="btn-close-modal text-white f-size-14 cursor-pointer" data-bs-dismiss="modal">{{ __('Cerrar') }}<i class="fal fa-times"></i></span>
                <span class="f-size-24 ff-syne text-white text-center w-100">{{ __('Restablecer contraseña') }}</span>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" >
                        <div class="col-12 col-lg-10 offset-lg-1" >
                            @include('web.template-parts.forms.auth.reset-email')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade e-popupLogin" id="registerForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden">
            <div class="modal-header p-5 justify-content-center position-relative bg-black">
                <span class="btn-close-modal text-white f-size-14 cursor-pointer" data-bs-dismiss="modal">{{ __('Cerrar') }}<i class="fal fa-times"></i></span>
                <span class="f-size-24 ff-syne text-white text-center w-100">{{ __('Registrar') }}</span>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" >
                        <div class="col-12 col-lg-10 offset-lg-1 registerForm_confirm py-6" style="display: none" >
                            <p class="e-popupLogin_textconfirm mb-0 mt-3 text-center" >{{ __('Te has registrado correctamente') }}</p>
                            <p class="e-popupLogin_subtextconfirm text-center" >{{ __('Revisa tu bandeja de entrada para confirmar tu cuenta') }}</p>
                        </div>
                        <div class="col-12 col-lg-10 offset-lg-1 registerForm_form" >
                            @include('web.template-parts.forms.auth.register')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade e-popupLogin" id="verifyForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content overflow-hidden">
            <div class="modal-header p-5 justify-content-center position-relative bg-black">
                <span class="btn-close-modal text-white f-size-14 cursor-pointer" data-bs-dismiss="modal">{{ __('Cerrar') }}<i class="fal fa-times"></i></span>
                <span class="f-size-24 ff-syne text-white text-center w-100">{{ __('Verificación') }}</span>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" >
                        <div class="col-12 col-lg-10 offset-lg-1 registerForm_confirm py-6" >
                            <p class="e-popupLogin_textconfirm mb-0 mt-3 text-center" >{{ __('Tu cuenta se ha verificado correctamente') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>-->

    </body>
</html>
