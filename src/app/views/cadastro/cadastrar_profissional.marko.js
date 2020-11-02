// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/startbootstrap-freelancer$5.1.3/src/app/views/cadastro/cadastrar_profissional.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=description content><meta name=author content><title>Cadastro de Profissional</title><link href=vendor/fontawesome-free/css/all.min.css rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Montserrat:400,700 rel=stylesheet type=text/css><link href=https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic rel=stylesheet type=text/css><link href=css/freelancer.min.css rel=stylesheet></head><body id=page-top><nav class=\"navbar navbar-expand-lg text-uppercase fixed-top\" id=mainNav style=\"background-color: #707070\"><div class=container><button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded\" type=button data-toggle=collapse data-target=#navbarResponsive aria-controls=navbarResponsive aria-expanded=false aria-label=\"Toggle navigation\"><i class=\"fas fa-bars\"></i></button><a class=\"navbar-brand js-scroll-trigger\" href=#page-top>Portal Serv</a><div class=\"collapse navbar-collapse\" id=navbarResponsive><ul class=navbar-nav><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=index.html>Serviços</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=about.html>Sobre</a></li><li class=\"nav-item mx-0 mx-lg-1\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=contact.html>Ajuda</a></li><li class=\"nav-item mx-0 mx-lg-3\"><a class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" href=login.html>Entrar</a></li></ul></div><button type=button class=\"btn btn-light\"><a href=cadastro.html>Cadastrar</a></button></div></nav><section class=page-section id=contact><div class=container><br><br><h2 class=\"page-section-heading text-center mb-0\">Cadastrar Profissional</h2><br><br><div class=row><div class=\"col-lg-8 mx-auto\">");

  if (data.errosValidacao) {
    out.w("<div>");

    var $for$0 = 0;

    marko_forOf(data.errosValidacao, function(erro) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger alert-dismissible fade show\" role=alert>" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "<button type=button class=close data-dismiss=alert aria-label=Close><span aria-hidden=true>&times;</span></button></div>");
    });

    out.w(" </div>");
  }

  if (data.sucesso) {
    out.w("<div><div class=\"alert alert-success alert-dismissible fade show\" role=alert>Profissional cadastrado com sucesso! <button type=button class=close data-dismiss=alert aria-label=Close><span aria-hidden=true>&times;</span></button></div> </div>");
  }

  out.w(" <form action=/cadastrar_profissional method=POST id=cadastrarProfissional><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Nome</label><input class=form-control name=nome" +
    marko_attr("value", data.profissional.nome) +
    " id=nome type=text placeholder=Nome required=required data-validation-required-message=\"Please enter your name.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Celular</label><input class=form-control name=celular" +
    marko_attr("value", data.profissional.celular) +
    " id=celular type=tel placeholder=Celular required=required data-validation-required-message=\"Please enter your phone number.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Telefone</label><input class=form-control name=telefone" +
    marko_attr("value", data.profissional.telefone) +
    " id=telefone type=tel placeholder=Telefone required=required data-validation-required-message=\"Please enter your phone number.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Endereço</label><input class=form-control name=endereco" +
    marko_attr("value", data.profissional.endereco) +
    " id=endereco type=text placeholder=Endereço required=required data-validation-required-message=\"Please enter your address.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Cidade</label><input class=form-control name=cidade" +
    marko_attr("value", data.profissional.cidade) +
    " id=cidade type=text placeholder=Cidade required=required data-validation-required-message=\"Please enter your city.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Facebook, Instagram, Twitter...</label><input class=form-control name=redes_sociais" +
    marko_attr("value", data.profissional.redes_sociais) +
    " id=redes_sociais type=text placeholder=\"Redes Sociais\" required=required data-validation-required-message=\"Please enter your links.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Resumo Profissional</label><textarea class=form-control name=descricao" +
    marko_attr("value", data.profissional.descricao) +
    " id=descricao type=text placeholder=\"Resumo Profissional\"></textarea><p class=\"help-block text-danger\"></p></div></div><br><br><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Email</label><input class=form-control name=email" +
    marko_attr("value", data.profissional.email) +
    " id=email type=email placeholder=Email required=required data-validation-required-message=\"Please enter your email address.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Senha</label><input class=form-control name=senha" +
    marko_attr("value", data.profissional.senha) +
    " id=senha type=password placeholder=Senha required=required data-validation-required-message=\"Please enter your password.\"><p class=\"help-block text-danger\"></p></div></div><div class=control-group><div class=\"form-group floating-label-form-group controls mb-0 pb-2\"><label>Confirmar Senha</label><input class=form-control name=confirmarSenha id=confirmarSenha" +
    marko_attr("value", data.profissional.confirmarSenha) +
    " type=password placeholder=\"Confirmar Senha\" required=required data-validation-required-message=\"Please enter your confirm password.\"><p class=\"help-block text-danger\"></p></div></div><br><div class=form-group><button type=submit class=\"btn btn-light btn-xl\" id=sendMessageButton><a>Cadastrar</a></button></div> </form></div></div></div></section><footer class=\"footer text-center\"><div class=container><div class=row><div class=col-lg-2><p class=\"lead mt-3\">Sorocaba - SP</p></div><div class=col-lg-8></div><div class=col-lg-2><a class=\"btn btn-outline-light btn-social mx-1\" href=#><i class=\"fab fa-fw fa-whatsapp\"></i></a><a class=\"btn btn-outline-light btn-social mx-1\" href=#><i class=\"fab fa-fw fa-facebook-f\"></i></a></div></div></div></footer><div class=\"scroll-to-top d-lg-none position-fixed \"><a class=\"js-scroll-trigger d-block text-center text-white rounded\" href=#page-top><i class=\"fa fa-chevron-up\"></i></a></div><script src=vendor/jquery/jquery.min.js></script><script src=vendor/bootstrap/js/bootstrap.bundle.min.js></script><script src=vendor/jquery-easing/jquery.easing.min.js></script><script src=js/freelancer.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "117");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/startbootstrap-freelancer$5.1.3/src/app/views/cadastro/cadastrar_profissional.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
