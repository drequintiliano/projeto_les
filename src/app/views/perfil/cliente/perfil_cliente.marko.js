// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/cliente/perfil_cliente.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Perfil Cliente</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=cliente_contact.html>Ajuda</a></li></ul></div><button type=button class=\"btn btn-light\"><a href=perfil_cliente>Perfil</a></button></div></nav><section class=page-section id=contact><div class=container><br><br><h2 class=\"page-section-heading text-center mb-0\">Perfil Cliente</h2><br><br><nav aria-label=breadcrumb><ol class=breadcrumb><li class=\"breadcrumb-item active\" aria-current=page>Perfil</li><li class=breadcrumb-item><a href=solicitacoes_cliente>Solicitações</a></li></ol></nav><div class=container-fluid><div class=container><div class=\"row py-2\"><div class=\"col-sm-2 ml-auto py-2\" align=center><div class=foto-perfil></div></div><div class=\"col-sm-4 mr-auto py-2\" align=center><div class=mt-2><h4>" +
    marko_escapeXml(data.cliente.nome) +
    "</h4></div></div></div><div class=\"row py-2\"><div class=\"col-sm-2 ml-auto py-2\"><label for=endereco class=\"col-sm-2 col-form-label\">Endereço</label></div><div class=\"col-sm-4 mr-auto py-2\"><input id=endereco name=endereco class=form-control type=text" +
    marko_attr("value", data.cliente.endereco) +
    " disabled></div></div><div class=\"row py-2\"><div class=\"col-sm-2 ml-auto py-2\"><label for=email class=\"col-sm-2 col-form-label\">Email</label></div><div class=\"col-sm-4 mr-auto py-2\"><input id=email name=email class=form-control type=text" +
    marko_attr("value", data.cliente.email) +
    " disabled></div></div> <div class=\"row py-2\"><div class=\"col-sm-2 ml-auto py-2\"><label for=celular class=\"col-sm-2 col-form-label\">Celular</label></div><div class=\"col-sm-4 mr-auto py-2\"><input id=celular name=celular class=form-control type=text" +
    marko_attr("value", data.cliente.celular) +
    " disabled></div></div><div class=\"row py-2 mt-4 justify-content-center\"><div class=col-sm-2><button type=button class=\"btn btn-light\"><a href=#>Alterar</a></button></div><br><br><div class=col-sm-2><button type=button class=\"btn btn-light\"><a href=/index.html>Logout</a></button></div></div></div></div></div></section><div class=\"container py-5 my-5\"><div class=\"conatiner-fluid py-5 my-5\"></div></div><footer class=\"footer text-center\"><div class=container><div class=row><div class=col-lg-2><p class=\"lead mt-4\">Sorocaba - SP</p></div><div class=col-lg-8></div><div class=\"col-lg-2 mt-2\"><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-whatsapp\"></i></a><a class=\"btn btn-outline-light btn-social mx-2\" href=#><i class=\"fab fa-fw fa-facebook-f\"></i></a></div></div></div></footer><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=#page-top><i class=\"fa fa-chevron-up\"></i></a></div><script src=vendor/jquery/jquery.min.js></script><script src=vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=vendor/jquery-easing/jquery.easing.min.js></script><script src=js/jqBootstrapValidation.js></script><script src=js/contact_me.js></script><script src=js/freelancer.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "87");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/perfil/cliente/perfil_cliente.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
