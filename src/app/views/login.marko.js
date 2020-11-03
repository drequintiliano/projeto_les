// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Login</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=contact.html>Ajuda</a></li><li class=\"nav-item mx-0 mx-lg-3\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=login>Entrar</a></li></ul></div><button type=button class=\"btn btn-light\"><a href=cadastro.html>Cadastrar</a> </button></div></nav><section class=page-section id=contact><div class=container><br><br><h2 class=\"page-section-heading text-center mb-0\">Login</h2><br><br><div class=row><div class=\"col-lg-8 mx-auto\"><form action=/login method=POST id=login><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label for=email>Email</label><input class=form-control id=email name=email type=email placeholder=E-mail required=required data-validation-required-message=\"Por favor, coloque o email\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label for=senha>Senha</label><input type=password class=form-control id=senha name=senha placeholder=Senha required=required data-validation-required-message=\"Por favor, coloque a senha\"><p class=\"help-block text-danger\"></p></div></div><br><br><div class=form-group><button type=submit class=\"btn btn-light btn-xl\" id=sendMessageButton><a>Conectar</a></button></div></form></div></div></div></section><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=#page-top><i class=\"fa fa-chevron-up\"></i></a></div><script src=vendor/jquery/jquery.min.js></script><script src=vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=vendor/jquery-easing/jquery.easing.min.js></script><script src=js/jqBootstrapValidation.js></script><script src=js/contact_me.js></script><script src=js/freelancer.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "57");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
